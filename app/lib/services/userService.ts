import httpClient from "../http/client";
import {
  UpdateMyBioRequest,
  ChangeMyAvatarRequest,
  GetOtherUserProfileRequest,
  GetOtherSavedBlogListsRequest,
  EnableOrDisableUserRequest,
  DeleteUserRequest,
} from "@/app/types/userServiceType";
import { OffsetPagination } from "@/app/types/commonType";

class UserService {
  async updateMyBio(payload: UpdateMyBioRequest) {
    const response = await httpClient.patch("/user/me/update-my-bio", payload);
    return response;
  }

  async changeMyAvatar(payload: ChangeMyAvatarRequest) {
    const formData = new FormData();
    formData.append("file", payload.file);

    const response = await httpClient.post(
      "/user/me/change-my-avatar",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  }

  async getMySavedBlogLists(payload: OffsetPagination) {
    return await httpClient.get("/user/me/get-my-saved-blog-lists", {
      params: { ...payload },
    });
  }

  async getOtherUserProfile(payload: GetOtherUserProfileRequest) {
    return await httpClient.get(
      `/user/other/get-other-user-profile/${payload.user_id}`
    );
  }

  async getOtherSavedBlogLists(payload: GetOtherSavedBlogListsRequest) {
    return await httpClient.get("/user/other/get-other-saved-blog-lists", {
      params: { ...payload },
    });
  }

  async enableOrDisableUser(payload: EnableOrDisableUserRequest) {
    const response = await httpClient.patch(
      "/user/admin/enable-disable-user",
      payload
    );
    return response;
  }

  async deleteUser(payload: DeleteUserRequest) {
    const response = await httpClient.delete(
      `/user/admin/delete-user/${payload.user_id}`
    );
    return response;
  }
}

export default new UserService();
