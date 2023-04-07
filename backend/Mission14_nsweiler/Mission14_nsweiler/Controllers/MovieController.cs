using System;
using Microsoft.AspNetCore.Mvc;
using Mission14_nsweiler.Models;

namespace Mission14_nsweiler.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class MovieController : Controller
	{
		private MovieDbContext context;

		public MovieController(MovieDbContext temp)
		{
			context = temp; // we can't use temp because it lives and dies inside of this class so we use the context variable above instead
		}

		public IEnumerable<Movie> Get()
		{
			return context.Movies.ToArray();
		}
    }
}

