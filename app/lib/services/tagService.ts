import type {
  CreateTagRequest,
  DeleteTagRequest,
  UpdateTagRequest,
} from "@/app/types/tagServiceType";
import httpClient from "../http/client";

class TagService {
  async createTag(payload: CreateTagRequest) {
    return httpClient.post("/tag/admin/create-tag", payload);
  }

  async updateTag(payload: UpdateTagRequest) {
    return httpClient.patch("/tag/admin/update-tag", payload);
  }

  async deleteTag(payload: DeleteTagRequest) {
    return httpClient.delete(`/tag/admin/delete-tag/${payload.tag_id}`);
  }
}

export const tagService = new TagService();
export default tagService;
