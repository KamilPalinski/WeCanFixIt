using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace WeCanFixIt.Entities
{
    public class ResultEntity
    {
        [Key]
        public int StepId { get; set; }

        public string Action { get; set; }

        public string Step { get; set; }

    }
}
