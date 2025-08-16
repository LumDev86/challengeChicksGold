using Backend.Services;
using Backend.Router;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddScoped<IWaterJugService, WaterJugService>();

var app = builder.Build();

app.UseRouting();
app.UseAuthorization();

WaterJugRouter.Map(app);

Console.WriteLine("🚀 The server will start at: http://localhost:5144");
app.Run("http://localhost:5144");

