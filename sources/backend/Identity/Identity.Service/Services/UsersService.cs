﻿using AcademyCloud.Identity.Data;
using AcademyCloud.Identity.Domains.Entities;
using AcademyCloud.Identity.Extensions;
using AcademyCloud.Shared;
using Grpc.Core;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyCloud.Identity.Services.Users
{
    [Authorize]
    public class UsersService : Users.UsersBase
    {
        private readonly IdentityDbContext dbContext;

        public UsersService(IdentityDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public override async Task<GetAccessibleUsersResponse> GetAccessibleUsers(GetAccessibleUsersRequest request, ServerCallContext context)
        {
            var claims = context.GetTokenClaims();
            IEnumerable<User> users;

            if (claims.IsSystem)
            {
                users = dbContext.Users;
            }
            else if (claims.IsSocial)
            {
                users = new List<User>() { await dbContext.Users.FindAsync(Guid.Parse(claims.UserId)) };
            }
            else if (claims.IsDomainScoped)
            {
                users = dbContext.UserDomainAssignments.Where(x => x.Domain.Id.ToString() == claims.DomainId).Select(x => x.User);
            }
            else if (claims.IsProjectScoped)
            {
                users = dbContext.UserProjectAssignments.Where(x => x.Project.Id.ToString() == claims.ProjectId).Select(x => x.User);
            }
            else
            {
                throw new RpcException(new Status(StatusCode.PermissionDenied, "Unexpected tokenclaims"));
            }

            return new GetAccessibleUsersResponse
            {
                Users = { users.Select(x => x.ToGrpcUser()) }
            };


        }

        [Authorize(AuthPolicy.System)]
        public override async Task<RemoveUserFromSystemResponse> RemoveUserFromSystem(RemoveUserFromSystemRequest request, ServerCallContext context)
        {
            var user = await dbContext.Users.FindIfNullThrowAsync(request.UserId);

            dbContext.Users.Remove(user);

            await dbContext.SaveChangesAsync();

            return new RemoveUserFromSystemResponse() { };

        }
    }
}