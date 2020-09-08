using System;
using Microsoft.EntityFrameworkCore;

namespace FarmWorkPost.Entities
{
    public class DBContext: DbContext
    {
        public DBContext(DbContextOptions<DBContext> options): base(options)
        {
        }

        public DbSet<User> AppUsers { get; set; }
        public DbSet<Job> Jobs { get; set; }

        //public DBContext(DbContextOptions options) : base(options)
        //{
        //}

       

    }
}
