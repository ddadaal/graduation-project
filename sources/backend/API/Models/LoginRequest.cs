﻿using AcademyCloud.API.Models;
using AcademyCloud.Identity.Protos;
using AcademyCloud.Identity.Protos.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyCloud.API.Models
{
    public class LoginRequest
    {
        public string Username { get; set; } = default!;
        public string Password { get; set; } = default!;
        public Scope Scope { get; set; } = default!;
    }
}
