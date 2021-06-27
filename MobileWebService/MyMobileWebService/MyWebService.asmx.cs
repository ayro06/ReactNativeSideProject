using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Web.Services;
using System.Xml.Linq;

namespace MyMobileWebService
{
    [WebService(Namespace = "http://mywebservice.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [ScriptService]
    public class MyWebService : WebService
    {
        [WebMethod(Description = "Get People"),ScriptMethod(UseHttpGet = true)]
        public void GetPeople()
        {
            var file = Path.Combine(HttpRuntime.AppDomainAppPath,"People.xml");
            var doc = XDocument.Load(file);
            var root = doc.Root;
            var elements = doc.Root.Elements();
            var people = new List<Person>();
            foreach (var e in elements)
            {
                var person = new Person
                {
                    Id = int.Parse(e.Attribute("Id").Value),
                    Name = e.Element("Name").Value,
                    Phone = e.Element("Phone").Value,
                    Address = new Address
                    {
                        Street = e.Element("Address").Element("Street").Value,
                        City = e.Element("Address").Element("City").Value,
                        State = e.Element("Address").Element("State").Value,
                        Zip = e.Element("Address").Element("Zip").Value,
                        Country = e.Element("Address").Element("Country").Value,
                    }
                };
                people.Add(person); 
            }
            var result = new JavaScriptSerializer().Serialize(people);
            Context.Response.Write(result);
        }


        [WebMethod(Description = "Add Person"), ScriptMethod(UseHttpGet = false)]
        public void AddPerson(string name, string phone, string street, string city, string state, string zip, string country)
        {
            var file = Path.Combine(HttpRuntime.AppDomainAppPath, "People.xml");
            var doc = XDocument.Load(file);
            var root = doc.Root;

            int id = 1; 
            if(root.Elements("Person").Any())
            {
                id = doc.Descendants("Person").Max(p => (int)p.Attribute("Id")) +1;
            }

            var person = new XElement("Person");
            person.Add(new XAttribute("Id",id));
            person.Add(new XElement("Name", name));
            person.Add(new XElement("Phone",phone));
            var address = new XElement("Address");
            address.Add(new XElement("Street", street));
            address.Add(new XElement("City", city));
            address.Add(new XElement("State", state));
            address.Add(new XElement("Zip", 9999));
            address.Add(new XElement("Country", country));
            person.Add(address);
            root.Add(person);
            doc.Save(file);
            Context.Response.StatusCode = 201;
        }

        [WebMethod(Description = "Delete Person"), ScriptMethod(UseHttpGet = false)]
        public void DeletePerson(int id)
        {
            var file = Path.Combine(HttpRuntime.AppDomainAppPath, "People.xml");
            var doc = XDocument.Load(file);
            var person = doc.Root.Elements().FirstOrDefault(c => int.Parse(c.Attribute("Id").Value) == id);
            if (person != null)
            {
                person.Remove();
                doc.Save(file);
                Context.Response.StatusCode = 202;
            }                  
        }

        [WebMethod(Description = "Update Person"), ScriptMethod(UseHttpGet = false)]
        public void UpdatePerson(int id, string name, string phone, string street, string city, string state, string zip, string country)
        {
            var file = Path.Combine(HttpRuntime.AppDomainAppPath, "People.xml");
            var doc = XDocument.Load(file);
            var person = doc.Root.Elements().FirstOrDefault(c => int.Parse(c.Attribute("Id").Value) == id);
            if (person != null)
            {
                person.Element("Name").SetValue(name);
                person.Element("Phone").SetValue(phone);
                person.Element("Address").Element("Street").SetValue(street);
                person.Element("Address").Element("City").SetValue(city);
                person.Element("Address").Element("State").SetValue(state);
                person.Element("Address").Element("Zip").SetValue(zip);
                person.Element("Address").Element("Country").SetValue(country);
                doc.Save(file);
                Context.Response.StatusCode = 202;
            }
        }
    }
}



