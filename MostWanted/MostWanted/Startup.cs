using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MostWanted.Startup))]
namespace MostWanted
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
