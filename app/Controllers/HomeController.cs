using app.Data;
using app.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Web.Mvc;

namespace app.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var util = new Util.Util();
            var model = new List<Svg>();
            model = util.GetSvg(Server.MapPath("/"));
            return View(model);
        }

        public ActionResult GetSvg(string name)
        {
            var util = new Util.Util();
            var model = new List<Svg>();
            model = util.GetSvg(Server.MapPath("/"));
            string json = JsonConvert.SerializeObject(model);
            return View(model);
        }

        public ActionResult About(string name)
        {
            if (name != null)
            {
                using (StreamReader sr = new StreamReader(Path.Combine(Server.MapPath("~/assets/svg"), name)))
                {
                    ViewBag.Message = sr.ReadToEnd();
                }
            }

            /*    var util = new Util.Util();
                var model = new List<Jpg>();
                model = util.GetJpg(Server.MapPath("/"));*/
            var _base = new RepositorySelect();
            var model = new List<Base>();
            model = _base.GetBase();
            return View(model);
        }

        public ActionResult GetProduct()
        {
            var _base = new RepositorySelect();
            var model = new List<Base>();
            model = _base.GetBase();
            return Json(model, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost, ValidateInput(false)]
        public ActionResult About(string imageData, string logo, string wt, string ht, string ob)
        {
            Namber m = JsonConvert.DeserializeObject<Namber>(ob);
            var name = m.GetDate();
            var util = new Util.Util();
            var img = util.WriteFileLogo(Server.MapPath("~/"), logo, name, "logo", wt, ht);
            util.WriteFileJpg(Server.MapPath("~/"), imageData, name, "png", img);
            return RedirectToAction("Contact", "Home");
        }

        [HttpPost]
        public ActionResult Index(string imageData, string logo)
        {
            string logoName = Guid.NewGuid().ToString() + ".png";
            string logoWitPath = Path.Combine(Server.MapPath("~/FolderToSave"), logoName);

            using (FileStream fs = new FileStream(logoWitPath, FileMode.Create))
            {
                using (BinaryWriter bw = new BinaryWriter(fs))
                {
                    byte[] data = Convert.FromBase64String(logo);
                    bw.Write(data);
                    bw.Close();
                }
                fs.Close();
            }
            string imageDataName = Guid.NewGuid().ToString() + ".png";
            string imageDataWitPath = Path.Combine(Server.MapPath("~/FolderToSave"), imageDataName);
            using (FileStream fs = new FileStream(imageDataWitPath, FileMode.Create))
            {
                using (BinaryWriter bw = new BinaryWriter(fs))
                {
                    byte[] data = Convert.FromBase64String(imageData);
                    bw.Write(data);
                    bw.Close();
                }
                fs.Close();
            }
            return View();
        }
    }
}