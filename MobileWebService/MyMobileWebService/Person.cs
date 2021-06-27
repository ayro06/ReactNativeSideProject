using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyMobileWebService
{
    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public Address Address { get; set; }
    }
}