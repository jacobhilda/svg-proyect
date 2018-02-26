using app.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace app.Data
{
    public class RepositorySelect
    {
        public string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["cnn_ecmm_store"].ConnectionString;

        public List<Base> GetBase()
        {
            var list = new List<Base>();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand())
                {
                    command.Connection = connection;
                    command.CommandText = "SVG_LISt_PRODUCT";
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        var _base = new Base();
                        _base.Id = Convert.ToInt32(reader["ctrl"]);
                        _base.Ref = Convert.ToInt32(reader["ref"]);
                        _base.Code = Convert.ToString(reader["code"]);
                        _base.Title = Convert.ToString(reader["title"]);
                        var area = Convert.ToString(reader["area"]).Split(',');
                        _base.X = Convert.ToDouble(area[0]);
                        _base.Y = Convert.ToDouble(area[1]);
                        _base.W = Convert.ToDouble(area[2]);
                        _base.H = area.Length > 3 ? Convert.ToDouble(area[3]) : 0;
                        _base.Align = area.Length > 4 ? area[4] : "0";
                        var color = Convert.ToString(reader["color"]).Split('|');
                        var _color = new List<string>();
                        var _hexa = new List<string>();
                        var size = new List<string>();
                        foreach (string itm in color)
                        {
                            if (itm != "")
                            {
                                var O = itm.Split(':');
                                if (O.Length == 2)
                                {
                                    _color.Add(O[0]);
                                    _hexa.Add(O[1]);
                                }
                            }
                        }
                        var _size = Convert.ToString(reader["size"]).Split('|');
                        foreach (string item in _size)
                        {
                            size.Add(item);
                        }
                        _base.Hexa = _hexa;
                        _base.Colors = _color;
                        _base.Sizes = size;
                        list.Add(_base);
                    }
                }
                connection.Close();
            }
            return list;
        }
    }
}