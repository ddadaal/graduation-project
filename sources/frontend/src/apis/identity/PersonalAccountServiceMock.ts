import { PersonalAccountService, ProfileResponse, UpdateProfileRequest, GetJoinedDomainsResponse, GetJoinableDomainsResponse, GetScopesResponse } from './PersonalAccountService';
import { makeHttpError } from '../HttpService';

export class PersonalAccountServiceMock extends PersonalAccountService {

  async getScopes(): Promise<GetScopesResponse> {
    await this.delay();

    return {
      scopes: [
        { domainId: "NJUID", domainName: "NJU", role: "member" },
        { domainId: "NJUID", domainName: "NJU", projectName: "67", projectId: "67", role: "admin" },
        { domainId: "NJUID", domainName: "NJU", projectName: "fgh", projectId: "fgh", role: "member" },
        { domainId: "PKUID", domainName: "PKU", role: "admin" },
        { social: true, domainId: "socialID", domainName: "social", projectName: "test", projectId: "test", role: "admin" },
      ],
    }
  }


  async getProfile(): Promise<ProfileResponse> {
    await this.delay();
    return {
      profile: {
        id: "e10fcbe0-443e-440f-ba88-2a3dde2f534a",
        username: "test",
        email: "ddadaal@outlook.com",
      }
    }
  }

  async updateProfile(request: UpdateProfileRequest): Promise<ProfileResponse> {
    await this.delay();
    return {
      profile: {
        id: "e10fcbe0-443e-440f-ba88-2a3dde2f534a",
        username: "test",
        email: request.email ?? "ddadaal@outlook.com",
      }
    }
  }

  async updatePassword(password: string): Promise<void> {
    await this.delay();
  }

  async getJoinedDomains(): Promise<GetJoinedDomainsResponse> {
    await this.delay();
    return {
      domains: [
        { domainId: "NJUID", domainName: "NJU", role: "member" },
        { domainId: "PKUID", domainName: "PKU", role: "admin" },
      ]
    }
  }

  async exitDomain(domainId: string): Promise<void> {
    throw makeHttpError(403, { reason: "isPayAccount" });
  }

  async getJoinableDomains(): Promise<GetJoinableDomainsResponse> {
    await this.delay();
    return {
      domains: [
        { id: "NJUID", name: "NJU" },
        { id: "PKUID", name: "PKU" },
      ]
    };
  }

  async joinDomain(domainId: string): Promise<void> {
    await this.delay();
  }
}
