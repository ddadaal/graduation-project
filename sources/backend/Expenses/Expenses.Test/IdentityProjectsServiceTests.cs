﻿using AcademyCloud.Expenses.BackgroundTasks.BillingCycle;
using AcademyCloud.Expenses.BackgroundTasks.UseCycle;
using AcademyCloud.Expenses.Domain.Services.BillingCycle;
using AcademyCloud.Expenses.Domain.ValueObjects;
using AcademyCloud.Expenses.Extensions;
using AcademyCloud.Expenses.Services;
using AcademyCloud.Expenses.Test.Helpers;
using AcademyCloud.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using static AcademyCloud.Shared.Constants;

namespace AcademyCloud.Expenses.Test
{
    public class IdentityProjectsServiceTests : CommonTest
    {
        private CombinedBillingCycleConfigurations billingConfiguration = new CombinedBillingCycleConfigurations
        {
            CheckCycleMs = 500,
            SettleCycleMs = 1000,
        };
        private CombinedUseCycleConfigurations useConfiguration = new CombinedUseCycleConfigurations
        {
            CheckCycleMs = 500,
            SettleCycleMs = 1000,
        };

        public (IdentityService, BillingCycleTask, UseCycleTask) CreateService(TokenClaims? tokenClaims = null)
        {
            var (billingTask, billingService) = ConfigureBillingCycleTask(billingConfiguration);
            var (useTask, useService) = ConfigureUseCycleTask(useConfiguration);
            var claimsAccessor = MockTokenClaimsAccessor(tokenClaims ?? njuadminnjuTokenClaims);

            return (new IdentityService(claimsAccessor, db, billingService), billingTask, useTask);
        }
        private Guid projectId = Guid.NewGuid();
        private Guid payUserAssignmentId = Guid.NewGuid();

        private IdentityService service;

        public IdentityProjectsServiceTests()
        {
            var (service, _, _) = CreateService();
            this.service = service;
            service.AddProject(new Protos.Identity.AddProjectRequest
            {
                Id = projectId.ToString(),
                PayUserId = cjd.Id.ToString(),
                PayUserAssignmentId = payUserAssignmentId.ToString(),
            }, TestContext).Wait();
        }

        [Fact]
        public async Task TestAddProject()
        {
            AssertIEnumerableIgnoreOrder(new[] { projectId, payUserAssignmentId }, db.BillingCycleEntries.Select(x => x.Id));
            AssertIEnumerableIgnoreOrder(new[] { projectId, payUserAssignmentId, SocialDomainId }, db.UseCycleEntries.Select(x => x.Id));
            var project = db.BillingCycleEntries.Find(projectId).Subject.Project;
            Assert.NotNull(project);
            Assert.Single(project.Users);
            Assert.Equal(cjd, project.PayUser);
            Assert.NotNull(db.ManagementFeeEntries.FirstOrDefault(x => x.Id == projectId));
            Assert.NotNull(db.BillingCycleEntries.FirstOrDefault(x => x.Id == projectId));
            Assert.NotNull(db.UseCycleEntries.FirstOrDefault(x => x.Id == projectId));
        }

        [Fact]
        public async Task TestAddUserToProject()
        {
            // Then add 67 into the project
            await service.AddUserToProject(new Protos.Identity.AddUserToProjectRequest
            {
                UserId = lq.Id.ToString(),
                ProjectId = projectId.ToString(),
                UserProjectAssignmentId = Guid.NewGuid().ToString(),
            }, TestContext);

            var project = db.Projects.Find(projectId);
            Assert.Equal(new[] { cjd.Id, lq.Id }.ToList(), project.Users.Select(x => x.User.Id).ToList());
        }

        [Fact]
        public async Task TestRemoveProject()
        {
            await service.DeleteProject(new Protos.Identity.DeleteProjectRequest
            {
                Id = projectId.ToString(),
            }, TestContext);

            Assert.Empty(db.BillingCycleEntries.Where(x => x.Subject.Project.Id == projectId));
            Assert.Empty(db.UseCycleEntries.Where(x => x.Subject.Project.Id == projectId));
            Assert.Empty(db.BillingCycleEntries.Where(x => x.Subject.UserProjectAssignment.Id == payUserAssignmentId));
            Assert.Empty(db.UseCycleEntries.Where(x => x.Subject.UserProjectAssignment.Id == payUserAssignmentId));
            Assert.Empty(cjd.Projects.Where(x => x.Project.Id == projectId));
            Assert.Null(db.ManagementFeeEntries.FirstOrDefault(x => x.Id == projectId));
            Assert.Null(db.BillingCycleEntries.FirstOrDefault(x => x.Id == projectId));
            Assert.Null(db.UseCycleEntries.FirstOrDefault(x => x.Id == projectId));
        }

        [Fact]
        public async Task TestRemoveUserFromProject()
        {
            // Then add cjy
            await service.AddUserToProject(new Protos.Identity.AddUserToProjectRequest
            {
                UserId = cjy.Id.ToString(),
                ProjectId = projectId.ToString(),
                UserProjectAssignmentId = Guid.NewGuid().ToString(),
            }, TestContext);

            // Then remove cjy
            await service.RemoveUserFromProject(new Protos.Identity.RemoveUserFromProjectRequest
            {
                UserId = cjy.Id.ToString(),
                ProjectId = projectId.ToString(),
            }, TestContext);

            Assert.Single(db.Projects.Find(projectId).Users);
            Assert.Empty(cjy.Projects);
        }

        [Fact]
        public async Task TestSetPayUser()
        {
            Assert.Equal(cjd, db.Projects.Find(projectId).PayUser);

            await service.SetProjectPayUser(new Protos.Identity.SetProjectPayUserRequest
            {
                ProjectId = projectId.ToString(),
                PayUserId = cjy.Id.ToString(),
            }, TestContext);

            Assert.Equal(cjy, db.Projects.Find(projectId).PayUser);
        }

        [Fact]
        public async Task TestSetProjectQuota()
        {
            var project = db.Projects.Find(projectId);
            Assert.Equal(Resources.Zero, project.Quota);

            var newQuota = new Resources(10, 10, 10); 
            await service.SetProjectQuota(new Protos.Identity.SetProjectQuotaRequest
            {
                ProjectId = projectId.ToString(),
                Quota = newQuota.ToGrpc(),
            }, TestContext);

            Assert.Equal(newQuota, project.Quota);
            // Since previously it has zero quota, there should be no records
            Assert.Empty(project.BillingCycleRecords);
            Assert.Empty(project.PayedOrgTransactions);

            // change quota
            await service.SetProjectQuota(new Protos.Identity.SetProjectQuotaRequest
            {
                ProjectId = projectId.ToString(),
                Quota = new Protos.Common.Resources { Cpu = 1, Memory = 1, Storage = 1 }
            }, TestContext);

            // Previous quota is not zero, there should be records
            var record = Assert.Single(project.BillingCycleRecords);
            Assert.Equal(record.Quota, newQuota);
        }

        [Fact]
        public async Task TestSetProjectUserQuota()
        {
            var userAssignment = db.UserProjectAssignments.Find(payUserAssignmentId);
            Assert.Equal(Resources.Zero, userAssignment.Quota);

            var newQuota = new Resources(10, 10, 10);
            await service.SetProjectUserQuota(new Protos.Identity.SetProjectUserQuotaRequest
            {
                ProjectId = projectId.ToString(),
                UserId = cjd.Id.ToString(),
                Quota = newQuota.ToGrpc(),
            }, TestContext);

            Assert.Equal(newQuota, userAssignment.Quota);
            // No allocated billing is to be issued to project user.
            Assert.Empty(userAssignment.BillingCycleRecords);
            Assert.Empty(userAssignment.PayedOrgTransactions);

            // change quota
            await service.SetProjectUserQuota(new Protos.Identity.SetProjectUserQuotaRequest
            {
                ProjectId = projectId.ToString(),
                UserId = cjd.Id.ToString(),
                Quota = new Protos.Common.Resources { Cpu = 1, Memory = 1, Storage = 1 }
            }, TestContext);

            // one allocated billing with zero amount is to be issued to project user.
            var billing = Assert.Single(userAssignment.BillingCycleRecords);
            Assert.Equal(0, billing.Amount);
        }
    }
}
