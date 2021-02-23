using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WeCanFixIt.Database;
using WeCanFixIt.Entities;
using WeCanFixIt.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Http;

namespace WeCanFixIt.Controllers
{
   
    public class CarsBrandController : Controller
    {
        private readonly TutorialsDbContext _context;

        public CarsBrandController(TutorialsDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Index()
        {
            List<CarsBrandEntity> BrandsList = new List<CarsBrandEntity>(); 
            BrandsList.Insert(0, new CarsBrandEntity { Id = 0, Name = "Wybierz" });
            ViewBag.Items = _context.Brands.ToList();
            return View();
        }
        
        [HttpGet]
        public IActionResult Categories()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetCarsModel(int id)
        {
            List<CarsModelEntity> ModelList = new List<CarsModelEntity>();

            ModelList = _context.Models.Where(x => x.Id==id).ToList();
            ModelList.Insert(0, new CarsModelEntity { ModelId = 0, ModelName = "Wybierz",});
            return Json(new SelectList(ModelList, "ModelId", "ModelName"));
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Index(CarsModelModel list)
        {
            if (ModelState.IsValid)
            {
                var Show = new CategoriesModel
                {
                    Id = list.ModelId,
                };

               
                return View(list);
            }
            return View(list);

        }
    

    }
}
