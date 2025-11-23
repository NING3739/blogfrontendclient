import httpClient from "../http/client";
import type {
  CreateTagRequest,
  UpdateTagRequest,
  DeleteTagRequest,
} from "@/app/types/tagServiceType";

class TagService {
  async createTag(payload: CreateTagRequest) {
    const response = await httpClient.post("/tag/admin/create-tag", payload);
    return response;
  }

  async updateTag(payload: UpdateTagRequest) {
    const response = await httpClient.patch("/tag/admin/update-tag", payload);
    return response;
  }

  async deleteTag(payload: DeleteTagRequest) {
    const response = await httpClient.delete(
      `/tag/admin/delete-tag/${payload.tag_id}`
    );
    return response;
  }
}

export default new TagService();
