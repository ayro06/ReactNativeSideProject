using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MyMobileWebService
{
    public partial class People : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            string xmlString = File.ReadAllText(Server.MapPath("People.xml"));

            Xml1.DocumentContent = xmlString;
            Xml1.TransformSource = Server.MapPath("People.xslt"); 

        }
    }
}