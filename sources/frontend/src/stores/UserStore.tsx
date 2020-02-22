import { useState, useCallback } from "react";
import { ScopeClass, Scope } from "src/models/Scope";

const STORAGE_KEY = "User";

interface User {
  username: string;
  scope: ScopeClass;
  availableScopes: ScopeClass[];
  token: string;
}

export function getUserInfoInStorage(): User | null {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    return JSON.parse(data) as User;
  } else {
    return null;
  }
}

export function UserStore() {
  const [user, setUser] = useState(getUserInfoInStorage);

  const changeScope = useCallback((scope: ScopeClass) => {
    setUser((user) => user ? { ...user, scope } : null);
  }, [setUser]);

  const loggedIn = !!user;

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  const login = useCallback((
    username: string,
    scope: Scope,
    availableScopes: Scope[],
    token: string,
    remember: boolean
  ) => {
    setUser({
      username,
      scope: new ScopeClass(scope),
      availableScopes: availableScopes.map((x) => new ScopeClass(x)),
      token,
    });
    if (remember) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { loggedIn, user, logout, login, changeScope };
}
