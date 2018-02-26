using System.Collections.Generic;

namespace app.Models
{
    public class Base
    {
        public int Id { get; set; }
        public int Ref { get; set; }
        public string Code { get; set; }
        public string Title { get; set; }
        public double X { get; set; }
        public double Y { get; set; }
        public double W { get; set; }
        public double H { get; set; }
        public string Align { get; set; }
        public List<string> Sizes { get; set; }
        public List<string> Colors { get; set; }
        public List<string> Hexa { get; set; }
    }
}