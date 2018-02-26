using app.Models;
using NReco.PhantomJS;
using System;
using System.Collections.Generic;
using System.IO;

namespace app.Util
{
    public class Util
    {
        public string WriteFileLogo(string root, string html1, string name, string type, string w, string h)
        {
            if (w == null)
                w = "210";
            if (h == null)
                h = "230";
            html1 = html1.Replace("<!-- Creator: CorelDRAW X7 -->", "<!DOCTYPE svg PUBLIC ' -//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>");
            html1 = html1.Replace("!--", "");
            html1 = html1.Replace("--", "");
            string html = "<!DOCTYPE html>";
            html += "<html xmlns='http://www.w3.org/1999/xhtml' lang='es'>";
            html += "<head>";
            html += "<meta http-equiv = 'Content-Type' content = 'text/html; charset=utf-8'/>";
            html += "<meta name = 'viewport'  content='width=device-width, initial-scale=1.0'/>";
            html += "<meta charset='utf-8' />";
            html += "<title></title>";
            html += "<link href='../Content/fonts.css' rel='stylesheet' />";
            html += "<script src='../Scripts/jquery-3.0.0.min.js'></script>";
            html += "</head>";
            html += "<body>";
            html += html1;
            html += "</body>";
            html += "</html>";
            html += "<script type='text/javascript' src='../Scripts/base_logo.js'></script>";

       
            var path = Path.Combine(Path.Combine(root, "html"), name + ".html");
            using (StreamWriter sw = File.CreateText(path))
            {
                sw.Write(html);
            }

            string scriptFiile = Path.Combine(root, "js/rasterize.js");
            string scripCode = File.ReadAllText(scriptFiile);
            scripCode = scripCode.Replace("[URL]", Constant.GetHost + "html/" + name + ".html");

            string phatpng = Path.Combine(root.Replace("/", @"\"), @"images\" + type + @"\" + name + ".png");
            phatpng = phatpng.Replace(@"\", @"\\");
            scripCode = scripCode.Replace("[NAME]", phatpng);
            scripCode = scripCode.Replace("[w]", w);
            scripCode = scripCode.Replace("[h]", h);
            string pathjs = Path.Combine(root, "js\\pa\\" + Guid.NewGuid().ToString() + ".js");

            using (StreamWriter sw = File.CreateText(pathjs))
            {
                sw.Write(scripCode);
            }

            PhantomJS phantomJS = new PhantomJS();

            phantomJS.Run(pathjs, null);
            return name + ".png";
        }

        public void WriteFileJpg(string root, string html1, string name, string type, string img)
        {
            html1 = html1.Replace("<!-- Creator: CorelDRAW X7 -->", "<!DOCTYPE svg PUBLIC ' -//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>");
            html1 = html1.Replace("!--", "");
            html1 = html1.Replace("--", "");
            html1 = html1.Replace("[IMG]", " <img id='bximglogo' src='/images/logo/" + img + "'>");
            string html = "<!DOCTYPE html>";
            html += "<html xmlns='http://www.w3.org/1999/xhtml' lang='es'>";
            html += "<head>";
            html += "<meta http-equiv = 'Content-Type' content = 'text/html; charset=utf-8'/>";
            html += "<meta name = 'viewport'  content='width=device-width, initial-scale=1.0'/>";
            html += "<meta charset='utf-8' />";
            html += "<title></title>";
            html += "<link href='../Content/fonts.css' rel='stylesheet' />";
            html += "<link href='../Content/bootstrap.css' rel='stylesheet' />";
            html += "<link href='../Content/base.css' rel='stylesheet' />";
            html += "<script src='../Scripts/JQuery.js'></script>";
            html += "<script src='https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js'></script>";
            html += "</head>";
            html += "<body>";
            html += html1;
            html += "</body>";
            html += "</html>";
            html += " <script src = '../Scripts/base_html.js' ></script> ";
          
            var path = Path.Combine(Path.Combine(root, "html"), name + "-2.html");
            using (StreamWriter sw = File.CreateText(path))
            {
                sw.Write(html);
            }
            string scriptFiile = Path.Combine(root, "js/jpg.js");
            string scripCode = File.ReadAllText(scriptFiile);
            scripCode = scripCode.Replace("[URL]", Constant.GetHost + "html/" + name + "-2.html");
            string phatpng = Path.Combine(root.Replace("/", @"\"), @"images\" + type + @"\" + name + ".jpg");
            phatpng = phatpng.Replace(@"\", @"\\");
            scripCode = scripCode.Replace("[NAME]", phatpng);
            string pathjs = Path.Combine(root, "js\\pa\\" + name + ".js");
            using (StreamWriter sw = File.CreateText(pathjs))
            {
                sw.Write(scripCode);
            }
            PhantomJS phantomJS = new PhantomJS();
            phantomJS.Run(pathjs, null);
        }

        public List<Svg> GetSvg(string root)
        {
            var list = new List<Svg>();
            DirectoryInfo di = new DirectoryInfo(Path.Combine(root, @"assets\svg"));
            var i = 1;
            foreach (var fi in di.GetFiles())
            {
                var svg = new Svg();
                svg.ID = i;
                svg.Name = fi.Name;
                svg.Url = Path.Combine("/assets/svg", fi.Name);
                list.Add(svg);
                i++;
            }
            return list;
        }

        public List<Jpg> GetJpg(string root)
        {
            var list = new List<Jpg>();
            DirectoryInfo di = new DirectoryInfo(Path.Combine(root, @"assets\img"));
            var i = 1;
            foreach (var fi in di.GetFiles())
            {
                var jpg = new Jpg();
                jpg.Id = i;
                jpg.Name = fi.Name;
                jpg.Url = Path.Combine("/assets/img", fi.Name);
                jpg.Url = jpg.Url.Replace(@"\", "/");
                list.Add(jpg);
                i++;
            }
            return list;
        }
    }
}