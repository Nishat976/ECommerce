using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
//var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(opt =>
{
   opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors();
var app = builder.Build();
//configure the HTTP pipeline
app.UseCors (opt => {
   opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:3000");
});

app.UseRouting();
app.MapControllers();
DbInitializer.Initdb(app);
app.Run();
