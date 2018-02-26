using System;

namespace app.Models
{
    public class Namber
    {
        public string prod { get; set; }
        public string color { get; set; }
        public string size { get; set; }

        public string GetDate()
        {
            var date = Convert.ToString(DateTime.Now.ToBinary());
            if (date.Length < 21)
            {
                while (date.Length == 21)
                {
                    date += "|";
                }
            }
            else
            {
                date = date.Substring(0, 20);
            }

            return prod + color + date + size;
        }
    }
}