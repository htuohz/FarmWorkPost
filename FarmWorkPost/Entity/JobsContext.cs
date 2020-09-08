using System;
using Microsoft.EntityFrameworkCore;

namespace FarmWorkPost.Entity
{
    public class DBContext:DbContext
    {
        public DbSet<User> AppUsers { get; set; }
        public DbSet<Job> Jobs { get; set; }


        public DBContext(DbContextOptions options) : base(options)
        {
        }


    }
}
