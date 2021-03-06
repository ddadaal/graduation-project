﻿using AcademyCloud.Expenses.Exceptions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace AcademyCloud.Expenses.Extensions
{
    public static class DbSetExtensions
    {
        public static async Task<T> FindIfNullThrowAsync<T>(this DbSet<T> dbSet, string id) where T : class
        {
            return await dbSet.FindIfNullThrowAsync(Guid.Parse(id));
        }

        public static async Task<T> FindIfNullThrowAsync<T>(this DbSet<T> dbSet, Guid id) where T : class
        {
            return await dbSet.FindAsync(id) ?? throw EntityNotFoundException.Create<T>(id);
        }

        public static async Task<T> FirstIfNotNullThrowAsync<T>(this DbSet<T> dbSet, Expression<Func<T, bool>> predicate, params object[] predicates) where T : class
        {
            return await dbSet.FirstOrDefaultAsync(predicate) ?? throw EntityNotFoundException.Create<T>(predicates);
        }

    }
}
