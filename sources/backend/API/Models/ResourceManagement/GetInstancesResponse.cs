﻿using AcademyCloud.ResourceManagement.Protos.Instance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyCloud.API.Models.ResourceManagement
{
    public class GetInstancesResponse
    {
        public IEnumerable<Instance> Instances { get; set; }
    }
}
