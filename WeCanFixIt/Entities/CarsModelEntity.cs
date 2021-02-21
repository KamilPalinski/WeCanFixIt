using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace WeCanFixIt.Entities
{
    public class CarsModelEntity
    {
        [Key]
        public int ModelId { get; set; }

        public string ModelName { get; set; }

        public int Id { get; set; }


    }
    
}
