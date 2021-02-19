using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WeCanFixIt.Models;

namespace WeCanFixIt.Database
{
    public class TutorialsDbContext : DbContext
    {
        public TutorialsDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<TutorialsModel> Cars { get; set; }

        protected override void OnModelCreating(ModelBuilder builder) {

            base.OnModelCreating(builder);
        }

    }
}
