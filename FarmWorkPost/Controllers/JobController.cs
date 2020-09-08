using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FarmWorkPost.Entities;
using Microsoft.AspNetCore.Mvc;

using Microsoft.Extensions.Logging;

using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FarmWorkPost.Controllers
{
    [Route("api/[controller]")]
    public class JobController : Controller
    {

        private readonly ILogger _logger;
        private readonly DBContext _dbContext;

        public JobController(ILoggerFactory loggerFactory, DBContext dbContext)
        {
            this._logger = loggerFactory.CreateLogger(this.GetType().Name);
            this._dbContext = dbContext;
        }

        // GET: api/values
        [HttpGet]
        [Route("GetAllJobs")]
        public async Task<ActionResult<object>> GetAllJobs(int from, int limit)
        {
            try
            {
                var jobs = this._dbContext.Jobs
                    .AsNoTracking()
                    .Take(limit)
                    .ToList();

                if (jobs.Count > 0)
                {
                    return Ok(jobs);
                }
                else
                {
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex, "GetAllOrders Failed");
                return BadRequest();
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        [Route("PostJob")]
        public async Task<ActionResult<object>> Post([FromBody] Models.Job model)
        {
            try
            {
                Entities.Job newJob = new Entities.Job()
                {
                    Company=model.Company,
                    Title=model.Title,
                    Description = model.Description,
                    Location = model.Location
                };

                await this._dbContext.Jobs.AddAsync(newJob);
                await this._dbContext.SaveChangesAsync();

                int result = await this._dbContext.SaveChangesAsync();

                if (result > 0)
                {
                    return Ok();
                }
                else
                {
                    return BadRequest();
                }


            }
            catch (Exception ex)
            {
                this._logger.LogError(ex, "CreateOrder Failed");
                return BadRequest();
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
