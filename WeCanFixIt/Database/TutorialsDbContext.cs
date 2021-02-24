using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WeCanFixIt.Entities;

namespace WeCanFixIt.Database
{
    public class TutorialsDbContext : DbContext
    {
        public TutorialsDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<CarsBrandEntity> Brands { get; set; }
        public DbSet<CarsModelEntity> Models { get; set; }
        public DbSet<CategoriesEntity> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder builder) {
        }

    }
}
