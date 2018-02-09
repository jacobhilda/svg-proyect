using NReco.PhantomJS;
using System;
using System.IO;

namespace app.Util
{
    public class Util
    {
        public  void WriteFile(string root, string html, string name,string type )
        {
            html = "<!DOCTYPE html><html><head> <link href='/Content/bootstrap.css' rel='stylesheet'/>  <script src='/Scripts/jquery-3.0.0.js'></script>" + html;
            html += "</html>";
            html += "<script type='text/javascript'> $('#boxlimit').css('border','') ;$('#boxlimit').css('border-styl','') ;</script>";
            var path = Path.Combine(Path.Combine(root, "html"), name+".html");
            using (StreamWriter sw = File.CreateText(path))
            {
                sw.Write(html);
            }

            string scriptFiile = Path.Combine(root, "js/rasterize.js");
            string scripCode= File.ReadAllText(scriptFiile);
            scripCode= scripCode.Replace("[URL]", Constant.GetHost + "html/" + name + ".html");
            string phatpng = Path.Combine(root.Replace("/", @"\"), @"images\" + type + @"\" + name + ".png");
            phatpng = phatpng.Replace(@"\", @"\\");
            scripCode = scripCode.Replace("[NAME]", phatpng);
            string pathjs = Path.Combine(root, "js/pa/" + Guid.NewGuid().ToString() + ".js");

            using (StreamWriter sw = File.CreateText(pathjs))
            {
                sw.Write(scripCode);
            }

            PhantomJS phantomJS = new PhantomJS();

            phantomJS.RunAsync(pathjs, null);
        }



      
    }
}