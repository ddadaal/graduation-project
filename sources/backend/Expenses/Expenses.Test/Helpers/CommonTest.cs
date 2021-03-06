﻿using AcademyCloud.Expenses.Data;
using AcademyCloud.Expenses.Domain.Entities;
using Grpc.Core;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DomainEntity = AcademyCloud.Expenses.Domain.Entities.Domain;
using static AcademyCloud.Shared.Constants;
using AcademyCloud.Expenses.Extensions;
using AcademyCloud.Shared;
using Moq;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.Threading;
using Microsoft.Extensions.Hosting;
using System.Linq;
using Xunit;
using AcademyCloud.Expenses.BackgroundTasks.BillingCycle;
using AcademyCloud.Expenses.Domain.Services.BillingCycle;
using AcademyCloud.Expenses.BackgroundTasks.UseCycle;
using AcademyCloud.Expenses.Domain.Services.UseCycle;
using AcademyCloud.Expenses.BackgroundTasks.ManagementFee;
using AcademyCloud.Expenses.Domain.Services.ManagementFee;

namespace AcademyCloud.Expenses.Test.Helpers
{
    public class CommonTest : IDisposable
    {
        protected ExpensesDbContext db;

        public User cjd = new User(Guid.NewGuid(), 10);
        public User cjy = new User(Guid.NewGuid(), 20);
        public User lq = new User(Guid.NewGuid(), 30);
        public User fgh = new User(Guid.NewGuid(), 40);
        public User fc = new User(Guid.NewGuid(), 50);
        public User njuadmin = new User(Guid.NewGuid(), 60);
        public DomainEntity nju;
        public DomainEntity pku;
        public Project lqproject;
        public Project fcproject;
        public UserProjectAssignment lq67project;
        public UserProjectAssignment cjd67project;
        public UserProjectAssignment fcfcproject;

        public TokenClaims cjdlqTokenClaims;
        public TokenClaims lqlqTokenClaims;
        public TokenClaims njuadminnjuTokenClaims;
        public TokenClaims fcfcTokenClaims;
        public TokenClaims systemTokenClaims;

        public void InitializeVariables(Domain.Entities.System system)
        {
            nju = new DomainEntity(Guid.NewGuid(), njuadmin, new Domain.ValueObjects.Resources(10, 20, 30), system);
            pku = new DomainEntity(Guid.NewGuid(), fc, new Domain.ValueObjects.Resources(20, 30, 40), system);
            cjd.JoinDomain(nju);
            cjd.JoinDomain(pku);
            lq.JoinDomain(nju);
            njuadmin.JoinDomain(nju);
            fc.JoinDomain(pku);

            lqproject = new Project(Guid.NewGuid(), lq, nju, new Domain.ValueObjects.Resources(5, 10, 20));
            fcproject = new Project(Guid.NewGuid(), fc, pku, new Domain.ValueObjects.Resources(10, 30, 40));

            lq67project = new UserProjectAssignment(Guid.NewGuid(), lq, lqproject, new Domain.ValueObjects.Resources(4, 8, 10));
            cjd67project = new UserProjectAssignment(Guid.NewGuid(), cjd, lqproject, new Domain.ValueObjects.Resources(1, 2, 10));
            fcfcproject = new UserProjectAssignment(Guid.NewGuid(), fc, fcproject, new Domain.ValueObjects.Resources(5, 15, 20));

            cjdlqTokenClaims = new TokenClaims(false, false, cjd.Id, nju.Id, lqproject.Id, cjd67project.Id, UserRole.Member);
            lqlqTokenClaims = new TokenClaims(false, false, lq.Id, nju.Id, lqproject.Id, lq67project.Id, UserRole.Admin);
            njuadminnjuTokenClaims = new TokenClaims(false, false, njuadmin.Id, nju.Id, null, null, UserRole.Admin);
            fcfcTokenClaims = new TokenClaims(false, false, fc.Id, pku.Id, fcproject.Id, fcfcproject.Id, UserRole.Admin);
            systemTokenClaims = new TokenClaims(true, false, SystemUserId, nju.Id, null, null, UserRole.Admin);
        }

        public void FillData(ExpensesDbContext context)
        {
            // system user: system, system

            context.Domains.AddRange(nju, pku);

            context.Users.AddRange(cjd, cjy, lq, fgh, fc, njuadmin);

            context.Projects.AddRange(lqproject, fcproject);

            context.UserProjectAssignments.AddRange(lq67project, cjd67project, fcfcproject);

            context.SaveChanges();
        }

        public void AssertIEnumerableIgnoreOrder<T>(IEnumerable<T> expected, IEnumerable<T> actual)
        {
            var comparer = typeof(IComparable).IsAssignableFrom(typeof(T))
                ? Comparer<T>.Default
                : Comparer<T>.Create((a, b) => a.GetHashCode() - b.GetHashCode());
            Assert.Equal(expected.OrderBy(x => x, comparer), actual.OrderBy(x => x, comparer));
        }

        public CommonTest()
        {
            var options = new DbContextOptionsBuilder<ExpensesDbContext>()
                .UseLazyLoadingProxies()
                .UseSqlite("DataSource=:memory:")
                .Options;

            db = new ExpensesDbContext(options);
            db.Database.OpenConnection();
            db.Database.EnsureCreated();

            var system = db.Systems.First();

            InitializeVariables(system);
            FillData(db);

            db.Entry(db.Users.Find(SocialDomainAdminId)).Collection(x => x.Domains).Load();
        }

        public void Dispose()
        {
            db.Database.EnsureDeleted();
            db.Dispose();
        }

        public ServerCallContext TestContext => TestServerCallContext.Create();

        public TokenClaimsAccessor MockTokenClaimsAccessor(TokenClaims tokenClaims)
        {
            var mockHttpAccessor = new Mock<IHttpContextAccessor>();

            var httpContext = new DefaultHttpContext
            {
                User = tokenClaims.ToClaimsPrincipal()
            };

            mockHttpAccessor.Setup(x => x.HttpContext).Returns(httpContext);

            return new TokenClaimsAccessor(mockHttpAccessor.Object);
        }

        public (BillingCycleTask, BillingCycleService) ConfigureBillingCycleTask(CombinedBillingCycleConfigurations configurations)
        {
            return ConfigureTask<BillingCycleTask, BillingCycleService, Domain.Services.BillingCycle.BillingCycleConfigurations, BackgroundTasks.BillingCycle.BillingCycleConfigurations>
                (configurations);
        }
        public (UseCycleTask, UseCycleService) ConfigureUseCycleTask(CombinedUseCycleConfigurations configurations)
        {
            return ConfigureTask<UseCycleTask, UseCycleService, Domain.Services.UseCycle.UseCycleConfigurations, BackgroundTasks.UseCycle.UseCycleConfigurations>
                (configurations);
        }
        public (ManagementFeeTask, ManagementFeeService) ConfigureManagementFeeTask(CombinedManagementFeeConfigurations configurations)
        {
            return ConfigureTask<ManagementFeeTask, ManagementFeeService, Domain.Services.ManagementFee.ManagementFeeConfigurations, BackgroundTasks.ManagementFee.ManagementFeeConfigurations>
                (configurations);
        }

        public (TTask, TService) ConfigureTask<TTask, TService, TDomainConfigurations, TTaskConfigurations>(ICombinedConfigurations<TDomainConfigurations, TTaskConfigurations> configurations)
            where TDomainConfigurations : class, new()
            where TTaskConfigurations : class, new()
            where TTask : class
            where TService : class
        {

            var mockITaskOptions = new Mock<IOptions<TTaskConfigurations>>();
            mockITaskOptions.Setup(x => x.Value).Returns(configurations.TaskConfigurations);

            var mockIDomainOptions = new Mock<IOptions<TDomainConfigurations>>();
            mockIDomainOptions.Setup(x => x.Value).Returns(configurations.DomainConfigurations);

            var services = new ServiceCollection();

            services.AddSingleton(db);
            services.AddSingleton<ScopedDbProvider>();
            services.AddLogging(o => o.AddConsole());
            services.AddSingleton(mockITaskOptions.Object);
            services.AddSingleton(mockIDomainOptions.Object);
            services.AddSingleton<TTask>();
            services.AddSingleton<TService>();

            var provider = services.BuildServiceProvider();

            return (provider.GetService<TTask>(), provider.GetService<TService>());
        }

        public async Task WaitForTaskForExecuteCycles<TTask>(TTask task, int spanMs, int times)
            where TTask : IHostedService
        {

            var token = new CancellationToken();

            await task.StartAsync(token);

            for (int i = 0; i < times; i++)
            {
                await Task.Delay(spanMs + 100, token);
            }

            await task.StopAsync(token);
        }
    }
}
