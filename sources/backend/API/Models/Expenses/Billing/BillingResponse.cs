﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyCloud.API.Models.Expenses.Billing
{
    public class BillingResponse<T>
    {
        public T Billing { get; set; }
    }
}
