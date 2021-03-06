﻿using AcademyCloud.Expenses.Domain.Entities.UseCycle;
using AcademyCloud.Expenses.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyCloud.Expenses.Domain.Services.UseCycle
{
    public class UseCycleEntry
    {
        public Guid Id { get; set; }

        public virtual UseCycleSubject Subject { get; set; }

        public DateTime LastSettled { get; set; }

        public Resources Resources => Subject.Resources;
        public SubjectType SubjectType { get; set; }

        public UseCycleEntry(UseCycleSubject subject)
        {
            Id = subject.Id;
            Subject = subject;
            SubjectType = subject.SubjectType;
            LastSettled = DateTime.UtcNow;
        }

        protected UseCycleEntry()
        {
        }

        public bool Settle(decimal price, DateTime now)
        {
            var returnValue = Subject.Settle(price, LastSettled, now);
            LastSettled = now;
            return returnValue;
        }


    }
}
