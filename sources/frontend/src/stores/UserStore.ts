import { useState, useCallback, useEffect } from "react";
import { Scope } from "src/models/Scope";
import { getApiService } from "src/apis";
import { AuthenticationService } from "src/apis/account/AuthenticationService";

const STORAGE_KEY = "User";


interface User {
  userId: string;
  username: string;
  scope: Scope;
  userActive: boolean;
  scopeActive: boolean;
  token: string;
  remember: boolean;
}

const authenticationService = getApiService(AuthenticationService);

export function getUserInfoInStorage(): User | null {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    const user =  JSON.parse(data) as User;
    authenticationService.setToken(user.token);
    return user;
  } else {
    return null;
  }
}

function saveUserInfo(user: User) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function UserStore() {
  const [user, setUser] = useState(getUserInfoInStorage);

  const loggedIn = !!user;

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  const login = useCallback((user: User) => {
    setUser(user);
    if (user.remember) {
      saveUserInfo(user);
    }
  }, []);

  const updateAvailability = useCallback(async () => {
    // just relogin
    if (user) {
      const resp = await authenticationService.changeScope(user.scope);
      // if availability is changed, relogin.
      if (user.scopeActive !== resp.scopeActive || user.userActive !== resp.userActive) {
        login({ ...user, ...resp });
      }
    }
  }, [user]);

  useEffect(() => {
    updateAvailability();
  }, [updateAvailability]);

  return { loggedIn, user, logout, login, updateAvailability };
}
