import type {
  CreateSingleFriendRequest,
  DeleteSingleFriendRequest,
  GetFriendListRequest,
  UpdateFriendListTypeRequest,
  UpdateFriendRequest,
} from "@/app/types/friendServiceType";
import httpClient from "../http/client";

class FriendService {
  async getFriendDetails() {
    return httpClient.get("/friend/get-friend-details");
  }

  async getFriendList(payload: GetFriendListRequest) {
    return httpClient.get(`/friend/get-friend-list/${payload.friend_id}`, {
      params: { limit: payload.limit, cursor: payload.cursor },
    });
  }

  async updateFriend(payload: UpdateFriendRequest) {
    return httpClient.patch("/friend/admin/update-friend", payload);
  }

  async createSingleFriend(payload: CreateSingleFriendRequest) {
    return httpClient.post("/friend/create-single-friend", payload);
  }

  async deleteSingleFriend(payload: DeleteSingleFriendRequest) {
    return httpClient.delete(`/friend/delete-single-friend/${payload.friend_list_id}`);
  }

  async updateFriendListType(payload: UpdateFriendListTypeRequest) {
    return httpClient.patch("/friend/admin/update-friend-list-type", payload);
  }
}

export const friendService = new FriendService();
export default friendService;
