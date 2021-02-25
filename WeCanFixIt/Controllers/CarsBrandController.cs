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

        [HttpPost]
        public IActionResult Result(ResultEntity model)  
       {
            var model1 = model.Action;
            ViewBag.items = _context.Result.Where(x => x.Action == model1).ToList();
            return View();
        }



        [HttpGet]
        public IActionResult GetCarsModel(int id)
        {
            List<CarsModelEntity> ModelList = new List<CarsModelEntity>();

            ModelList = _context.Models.Where(x => x.Id==id).ToList();
            ModelList.Insert(0, new CarsModelEntity { ModelId = 0, ModelName = "Wybierz",});
            return Json(new SelectList(ModelList, "ModelId", "ModelName"));
        }

        [HttpGet]
        public IActionResult GetChoosed()
        {
            return Json(new {data = _context.Categories.ToList()});
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Index([FromForm] CarsBrandEntity list)
        {
            if (ModelState.IsValid)
            {
                var choosedElement = new CategoriesEntity
                {
                    ModelName = HttpContext.Request.Form["ModelId"],
                };
                _context.Database.ExecuteSqlRaw("TRUNCATE TABLE [Categories]");
                _context.Add(choosedElement);
                _context.SaveChanges();
                return RedirectToAction("Categories");
            }
            return View(list);

        }


    }
}
