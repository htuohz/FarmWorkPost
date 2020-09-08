using System;
namespace FarmWorkPost.Models
{
    public class Job
    {
        public int JobId { get; set; }

        public string Title { get; set; }

        public string Location { get; set; }

        public string Description { get; set; }

        public string Type { get; set; }

        public string Company { get; set; }

        public float Salary { get; set; }


        public int UserId { get; set; }

        public Job()
        {
        }

        public Job(Entities.Job job)
        {
            this.Title = job.Title;
            this.Location = job.Location;
            this.Description = job.Description;
            this.Type = job.Type;
            this.Company = job.Company;
            this.Salary = job.Salary;
        }
    }
}
