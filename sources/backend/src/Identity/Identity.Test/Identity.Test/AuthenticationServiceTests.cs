using AcademyCloud.Identity.Data;
using AcademyCloud.Identity.Services;
using AcademyCloud.Shared;
using Grpc.Core;
using Identity.Test.DbContext;
using Identity.Test.Helpers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace Identity.Test
{
    [TestClass]
    public class AuthenticationServiceTests
    {
        public JwtSettings jwtSettings = new JwtSettings();

        private readonly DbContextOptions<IdentityDbContext> options =
            new DbContextOptionsBuilder<IdentityDbContext>()
                    .UseInMemoryDatabase(databaseName: "Identity Database")
                    .Options;

        [TestMethod]
        public async Task TestGetScopesSystem1()
        {
            // Arrange
            using var context = new IdentityDbContext(options);
            context.Users.AddRange(MockDbContext.Users);
            await context.SaveChangesAsync();
            var service = new AuthenticationService(context, new NullLogger<AuthenticationService>(), jwtSettings);

            // Act
            var resp = await service.GetScopes(new GetScopesRequest() { Username = "system1", Password = "1" }, TestServerCallContext.Create());

            // Assert
            Assert.IsTrue(resp.Success);
        }
    }
}