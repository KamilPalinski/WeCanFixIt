using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace WeCanFixIt.Entities
{
    public class ChoiceEntity
    {
        [Key]
        public string ModelName { get; set; }
    }
}
