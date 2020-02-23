import { HttpService, HttpMethod } from '../HttpService';
import { Profile } from "src/models/Profile";

export interface ProfileResponse {
  profile: Profile;
}

export interface UpdateProfileRequest {
  email?: string;
}

export class PersonalAccountService extends HttpService {
  async getProfile(): Promise<ProfileResponse> {
    const response = await this.fetch<ProfileResponse>({
      method: HttpMethod.GET,
      path: "/identity/account/profile",
    });

    return response;
  }

  async updateProfile(request: UpdateProfileRequest): Promise<ProfileResponse> {
    const response = await this.fetch<ProfileResponse>({
      method: HttpMethod.PATCH,
      path: "/identity/account/profile",
      body:  request,
    });

    return response;
  }
}
