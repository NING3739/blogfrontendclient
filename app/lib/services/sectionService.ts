import type {
  CreateSectionRequest,
  DeleteSectionRequest,
  GetSectionDetailsBySlugRequest,
  GetSectionSeoBySlugRequest,
  UpdateSectionRequest,
} from "@/app/types/sectionServiceType";
import httpClient from "../http/client";

class SectionService {
  async getSectionSeoBySlug(payload: GetSectionSeoBySlugRequest) {
    return httpClient.get(`/section/get-section-seo-by-slug/${payload.slug}`);
  }

  async getSectionDetailsBySlug(payload: GetSectionDetailsBySlugRequest) {
    return httpClient.get(`/section/get-section-details-by-slug/${payload.slug}`);
  }

  async updateSection(payload: UpdateSectionRequest) {
    return httpClient.patch("/section/admin/update-section", payload);
  }

  async createSection(payload: CreateSectionRequest) {
    return httpClient.post("/section/admin/create-section", payload);
  }

  async deleteSection(payload: DeleteSectionRequest) {
    return httpClient.delete(`/section/admin/delete-section/${payload.section_id}`);
  }
}

export const sectionService = new SectionService();
export default sectionService;
