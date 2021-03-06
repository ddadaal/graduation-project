﻿using AcademyCloud.Expenses.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademyCloud.Expenses.Domain.Entities.UseCycle
{
    public class UseCycleSubject : IUseCycleSubject
    {
        public Guid Id { get; set; }

        public virtual Domain? Domain { get; set; }

        public virtual Project? Project { get; set; }

        public virtual UserProjectAssignment? UserProjectAssignment { get; set; }

        public virtual ICollection<UseCycleRecord> UseCycleRecords { get; set; } = new List<UseCycleRecord>();

        public SubjectType SubjectType { get; set; }

        public IUseCycleSubject RealSubject => SubjectType switch
        {
            SubjectType.Domain => Domain!,
            SubjectType.Project => Project!,
            SubjectType.UserProjectAssignment => UserProjectAssignment!,
            _ => throw new InvalidOperationException(),
        };

        public Resources Resources => RealSubject.Resources;


        public bool Settle(decimal price, DateTime lastSettled, DateTime now)
        {
            
            var resources = Resources;

            if (resources == Resources.Zero)
            {
                return false;
            }

            var cycle = new UseCycleRecord(Guid.NewGuid(), resources.Clone(), lastSettled, now, price);
            UseCycleRecords.Add(cycle);

            return true;

        }

        protected UseCycleSubject() { }

        public UseCycleSubject(IUseCycleSubject subject)
        {
            Id = subject.Id;
            SubjectType = subject.SubjectType;

            switch (subject)
            {
                case Domain domain:
                    Domain = domain;
                    break;
                case Project project:
                    Project = project;
                    break;
                case UserProjectAssignment userProjectAssignment:
                    UserProjectAssignment = userProjectAssignment;
                    break;
                default:
                    throw new ArgumentOutOfRangeException(nameof(subject));
            }


        }
    }
}
