using Mission14_nsweiler.Models;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<MovieDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("MovieDbConnection"))
);

builder.Services.AddCors(); // Cross-Origin Resource Sharing (used when we are sharing resources between different technologies)

// finds the connection string in the appsettings.json and links it to the sqlite database



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(p => p.WithOrigins("http://localhost:3000")); // It's okay if it's coming from this origin

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

