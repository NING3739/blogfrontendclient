import httpClient from "../http/client";
import type {
  CreateSeoRequest,
  UpdateSeoRequest,
  DeleteSeoRequest,
} from "@/app/types/seoServiceType";

class SeoService {
  async createSeo(payload: CreateSeoRequest) {
    const response = await httpClient.post("/seo/admin/create-seo", payload);
    return response;
  }

  async updateSeo(payload: UpdateSeoRequest) {
    const response = await httpClient.patch("/seo/admin/update-seo", payload);
    return response;
  }

  async deleteSeo(payload: DeleteSeoRequest) {
    const response = await httpClient.delete(
      `/seo/admin/delete-seo/${payload.seo_id}`
    );
    return response;
  }
}

export default new SeoService();
