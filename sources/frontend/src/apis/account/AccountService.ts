import { HttpService, HttpMethod } from "../HttpService";
import { Scope } from "../../models/account";

export interface LoginResponse {
  token: string;
}

export interface RegisterResponse {
  token: string;
  scope: Scope;
}

export interface ScopesResponse {
  scopes: Scope[];
  defaultScope?: Scope;
  lastLoginScope?: Scope;
}

export class AccountService extends HttpService {
  async getScopes(username: string, password: string): Promise<ScopesResponse> {
    const data = await this.fetch<ScopesResponse>({
      method: HttpMethod.GET,
      params: { username, password },
      path: "/account/scopes",
    });

    return data;
  }

  async login(username: string, password: string, scope: Scope): Promise<LoginResponse> {
    const data = await this.fetch<LoginResponse>({
      method: HttpMethod.POST,
      body: { username, password, scope },
      path: "/account/token"
    });

    if (data.token) {
      this.setToken(data.token);
    }
    return data;
  }

  async register(username: string, password: string): Promise<RegisterResponse> {
    const data = await this.fetch<RegisterResponse>({
      method: HttpMethod.POST,
      body: { username, password },
      path: "/account"
    });

    if (data.token) {
      this.setToken(data.token);
    }
    return data;

  }

  setToken(token: string) {
    if (token) {
      this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete this.axios.defaults.headers.common.Authorization;
    }
  }
}