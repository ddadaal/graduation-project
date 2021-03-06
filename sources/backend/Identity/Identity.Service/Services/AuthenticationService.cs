﻿using System;
using System.Linq;
using System.Threading.Tasks;
using AcademyCloud.Identity.Data;
using AcademyCloud.Identity.Domain.Entities;
using AcademyCloud.Identity.Extensions;
using AcademyCloud.Identity.Protos.Authentication;
using AcademyCloud.Shared;
using Grpc.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

namespace AcademyCloud.Identity.Services
{
    public class AuthenticationService : Authentication.AuthenticationBase
    {
        private readonly IdentityDbContext dbContext;
        private readonly JwtSettings jwtSettings;
        private readonly TokenClaimsAccessor tokenClaimsAccessor;

        public AuthenticationService(IdentityDbContext dbContext, JwtSettings jwtSettings, TokenClaimsAccessor tokenClaimsAccessor)
        {
            this.dbContext = dbContext;
            this.jwtSettings = jwtSettings;
            this.tokenClaimsAccessor = tokenClaimsAccessor;
        }

        private string? Authenticate(User user, Scope scope)
        {
            if (scope.System)
            {
                if (!user.System) { return null; }
            }
            // In gRPC there is no null value, the empty string means nothing
            else if (string.IsNullOrEmpty(scope.ProjectId))
            {
                // disallow social domain login
                var domainIdGuid = Guid.Parse(scope.DomainId);
                if (domainIdGuid == Constants.SocialDomainId) { return null; }
                // it's a domain scope, find whether the user has it
                var domain = user.Domains.FirstOrDefault(x => x.Domain.Id == domainIdGuid && (int)x.Role == (int)scope.Role);
                if (domain == null) { return null; }
            }
            else
            {
                var project = user.Projects.FirstOrDefault(x => x.Project.Id == Guid.Parse(scope.ProjectId) && (int)x.Role == (int)scope.Role);
                if (project == null) { return null; }
            }

            // auth successful. generate token according to token claims
            var claims = new TokenClaims(scope.System, scope.Social, user.Id.ToString(), scope.DomainId, scope.ProjectId, scope.UserProjectAssignmentId, (UserRole)scope.Role);

            return jwtSettings.GenerateToken(claims);
        }

        public override async Task<AuthenticationReply> Authenticate(AuthenticationRequest request, ServerCallContext context)
        {
            var scope = request.Scope;

            // find the user
            var user = await dbContext.Users.FirstOrDefaultAsync(u => u.Username == request.Username && u.Password == request.Password);

            if (user == null)
            {
                return new AuthenticationReply() { Success = false };
            }

            var token = Authenticate(user, scope);

            if (token == null)
            {
                return new AuthenticationReply() { Success = false };
            }

            return new AuthenticationReply
            {
                Success = true,
                Token = token,
                UserId = user.Id.ToString(),
            };

        }

        public override async Task<GetScopesReply> GetScopes(GetScopesRequest request, ServerCallContext context)
        {
            var user = await dbContext.Users.FirstOrDefaultAsync(u => u.Username == request.Username && u.Password == request.Password);

            if (user == null)
            {
                return new GetScopesReply() { Success = false };
            }

            return new GetScopesReply() { Success = true, Scopes = { user.GetAvailableScopes() }, UserId = user.Id.ToString() };

        }

        [Authorize]
        public override Task<GetTokenInfoReply> GetTokenInfo(GetTokenInfoRequest request, ServerCallContext context)
        {
            var tokenClaims = tokenClaimsAccessor.TokenClaims;

            return Task.FromResult(new GetTokenInfoReply()
            {
                UserId = tokenClaims.UserId,
                Scope = new Scope()
                {
                    System = tokenClaims.System,
                    DomainId = tokenClaims.DomainId,
                    ProjectId = tokenClaims.ProjectId,
                    Role = (Protos.Common.UserRole)tokenClaims.Role,
                }
            });
        }

        [Authorize]
        public override async Task<ChangeScopeReply> ChangeScope(ChangeScopeRequest request, ServerCallContext context)
        {
            var tokenClaims = tokenClaimsAccessor.TokenClaims;
            var scope = request.Scope;

            // find the user
            var user = await dbContext.Users.FindIfNullThrowAsync(tokenClaims.UserId);

            if (user == null)
            {
                return new ChangeScopeReply() { Success = false };
            }

            var token = Authenticate(user, scope);

            if (token == null)
            {
                return new ChangeScopeReply() { Success = false };
            }

            return new ChangeScopeReply
            {
                Success = true,
                Token = token,
                UserId = user.Id.ToString(),
            };
        }
    }
}
