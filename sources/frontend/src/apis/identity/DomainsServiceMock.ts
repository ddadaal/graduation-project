import { DomainsService, GetDomainsResponse, GetUsersOfDomainResponse } from './DomainsService';
import { Resources } from "src/models/Resources";
import { User } from "src/models/User";
import { UserRole } from "src/models/Scope";

const cjd: User = { id: "CJDID",  name: "CJD" };
const cjy: User = { id: "CJYID",  name: "CJY" };

export class DomainsServiceMock extends DomainsService {
  async getDomains(): Promise<GetDomainsResponse> {
    await this.delay();
    return {
      domains: [
        {
          id: "NJUID",
          name: "NJUID",
          active: true,
          payUser: cjd,
          admins: [cjd, cjy],
          quota: { cpu: 4, memory: 64, storage: 5000 },
        },
        {
          id: "PKUID",
          name: "PKU",
          active: false,
          payUser: cjd,
          admins: [cjd],
          quota: { cpu: 8, memory: 128, storage: 10000 },
        }
      ]
    };
  }

  async getUsersOfDomain(domainId: string): Promise<GetUsersOfDomainResponse> {
    await this.delay();
    return {
      admins: [cjd],
      members: [cjy],
      payUser: cjd,
    }
  }
  async addUserToProject(domainId: string, userId: string, role: UserRole): Promise<void> {
    await this.delay();
  }

  async changeUserRole(domainId: string, userId: string, role: UserRole): Promise<void> {
    await this.delay();
  }

  async setResources(domainId: string, resources: Resources): Promise<void> {
    await this.delay();
    return undefined;
  }

  async setAdmins(domainId: string, adminIds: string[]): Promise<void> {
    await this.delay();
    return undefined;
  }

  async createDomain(name: string, payUserId: string): Promise<void> {
    await this.delay();
  }

  async setPayUser(domainId: string, payUserId: string): Promise<void> {
    await this.delay();
  }

  async deleteDomain(domainId: string): Promise<void> {
    await this.delay();
  }

  // 400, { code: "payUser" | "onlyAdmin" }
  async removeUserFromDomain(domainId: string, userId: string): Promise<void> {
    await this.delay();
  }
}
