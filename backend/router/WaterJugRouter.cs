using Backend.Controllers;

namespace Backend.Router
{
    public static class WaterJugRouter
    {
        public static void Map(WebApplication app)
        {          
            app.MapControllers();

            app.MapGet("/health", () => Results.Ok("API está funcionando"));
        }
    }
}
