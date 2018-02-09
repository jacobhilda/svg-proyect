using System;
using System.IO;
using System.Web.Mvc;

namespace app.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "";
            using (StreamReader sr = new StreamReader(Path.Combine(Server.MapPath("~/FolderToSave"), "svg.svg")))
            {
                ViewBag.Message = sr.ReadToEnd();
            }
            return View();
        }

        public ActionResult About()
        {
            using (StreamReader sr = new StreamReader(Path.Combine(Server.MapPath("~/assets/svg"), "svg.svg")))
            {
                ViewBag.Message = sr.ReadToEnd();
            }
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost, ValidateInput(false)]
        public ActionResult About(string imageData, string logo)
        {
            var util = new Util.Util();
            util.WriteFile(Server.MapPath("~/"), logo, "logo", "logo");
            util.WriteFile(Server.MapPath("~/"), imageData, "png", "png");
            return RedirectToAction("About", "Home");
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