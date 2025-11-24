import type {
  CreateSeoRequest,
  DeleteSeoRequest,
  UpdateSeoRequest,
} from "@/app/types/seoServiceType";
import httpClient from "../http/client";

class SeoService {
  async createSeo(payload: CreateSeoRequest) {
    return httpClient.post("/seo/admin/create-seo", payload);
  }

  async updateSeo(payload: UpdateSeoRequest) {
    return httpClient.patch("/seo/admin/update-seo", payload);
  }

  async deleteSeo(payload: DeleteSeoRequest) {
    return httpClient.delete(`/seo/admin/delete-seo/${payload.seo_id}`);
  }
}

export const seoService = new SeoService();
export default seoService;
