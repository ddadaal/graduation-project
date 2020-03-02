﻿using AcademyCloud.Identity.Data;
using AcademyCloud.Identity.Domains.Entities;
using AcademyCloud.Identity.Domains.ValueObjects;
using AcademyCloud.Identity.Services.Domains;
using AcademyCloud.Identity.Test.Helpers;
using Grpc.Core;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AcademyCloud.Identity.Test
{
    public class CommonTest : IDisposable
    {
        protected IdentityDbContext db;

        public Domain nju = new Domain(Guid.NewGuid(), "NJU");
        public Domain pku = new Domain(Guid.NewGuid(), "PKU");
        public User cjd = new User(Guid.NewGuid(), "cjd", "cjd", "cjd", "cjd@ac.com", false);
        public User cjy = new User(Guid.NewGuid(), "cjy", "cjy", "cjy", "cjy@ac.com", false);
        public User lq = new User(Guid.NewGuid(), "67", "67", "67", "67@ac.com", false);
        public User fgh = new User(Guid.NewGuid(), "fgh", "fgh", "fgh", "fgh@ac.com", false);
        public User fc = new User(Guid.NewGuid(), "fc", "fc", "fc", "fc@ac.com", false);
        public User njuadmin = new User(Guid.NewGuid(), "njuadmin", "njuadmin", "njuadmin", "njuadmin@ac.com", false);
        public UserDomainAssignment cjdnju;
        public UserDomainAssignment cjdpku;
        public UserDomainAssignment cjynju;
        public UserDomainAssignment lqnju;
        public UserDomainAssignment fghnju;
        public UserDomainAssignment njuadminnju;
        public UserDomainAssignment fcpku;
        public Project lqproject;
        public Project fcproject;
        public UserProjectAssignment lq67project;
        public UserProjectAssignment cjd67project;

        public void InitializeVariables()
        {
            cjdnju = new UserDomainAssignment(Guid.NewGuid(), cjd, nju, UserRole.Member);
            cjdpku = new UserDomainAssignment(Guid.NewGuid(), cjd, pku, UserRole.Member);
            cjynju = new UserDomainAssignment(Guid.NewGuid(), cjy, nju, UserRole.Member);
            lqnju = new UserDomainAssignment(Guid.NewGuid(), lq, nju, UserRole.Member);
            fghnju = new UserDomainAssignment(Guid.NewGuid(), fgh, nju, UserRole.Member);
            njuadminnju = new UserDomainAssignment(Guid.NewGuid(), njuadmin, nju, UserRole.Admin);
            fcpku = new UserDomainAssignment(Guid.NewGuid(), fc, pku, UserRole.Admin);
            lqproject = new Project(Guid.NewGuid(), "67 Project", nju);
            fcproject = new Project(Guid.NewGuid(), "fc Project", pku);
            lq67project = new UserProjectAssignment(Guid.NewGuid(), lq, lqproject, UserRole.Admin);
            cjd67project = new UserProjectAssignment(Guid.NewGuid(), cjd, lqproject, UserRole.Member);

        }

        public void FillData(IdentityDbContext context)
        {
            // system user: system, system
            context.Database.OpenConnection();
            context.Database.EnsureCreated();

            context.Domains.AddRange(nju, pku);

            context.Users.AddRange(cjd, cjy, lq, fgh, fc, njuadmin);

            context.UserDomainAssignments.AddRange(cjdnju, cjdpku, cjynju, lqnju, fghnju, njuadminnju, fcpku);

            context.Projects.AddRange(lqproject, fcproject);

            context.UserProjectAssignments.AddRange(lq67project, cjd67project);

            context.SaveChanges();
        }

        public CommonTest()
        {
            InitializeVariables();
            var options = new DbContextOptionsBuilder<IdentityDbContext>()
                        .UseSqlite("DataSource=:memory:")
                        .Options;

            db = new IdentityDbContext(options);

            FillData(db);

        }

        public void Dispose()
        {
            db.Database.EnsureDeleted();
            db.Dispose();
        }

        public ServerCallContext TestContext => TestServerCallContext.Create();
    }
}
