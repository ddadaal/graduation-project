﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyCloud.Identity.Domains.Entities
{
    public class User
    {
        public Guid Id { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }
        public string Email { get; set; }

        public bool IsSystemUser { get; set; }

        public IEnumerable<UserDomainAssignment> Domains { get; set; }

        public IEnumerable<UserProjectAssignment> Projects { get; set; }
        
    }
}