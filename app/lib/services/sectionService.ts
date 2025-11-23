import httpClient from "../http/client";
import type {
  GetSectionSeoBySlugRequest,
  GetSectionDetailsBySlugRequest,
  UpdateSectionRequest,
  CreateSectionRequest,
  DeleteSectionRequest,
} from "@/app/types/sectionServiceType";

class SectionService {
  async getSectionSeoBySlug(payload: GetSectionSeoBySlugRequest) {
    return await httpClient.get(
      `/section/get-section-seo-by-slug/${payload.slug}`
    );
  }

  async getSectionDetailsBySlug(payload: GetSectionDetailsBySlugRequest) {
    return await httpClient.get(
      `/section/get-section-details-by-slug/${payload.slug}`
    );
  }

  async updateSection(payload: UpdateSectionRequest) {
    const response = await httpClient.patch(
      `/section/admin/update-section`,
      payload
    );
    return response;
  }
  async createSection(payload: CreateSectionRequest) {
    const response = await httpClient.post(
      `/section/admin/create-section`,
      payload
    );
    return response;
  }
  async deleteSection(payload: DeleteSectionRequest) {
    const response = await httpClient.delete(
      `/section/admin/delete-section/${payload.section_id}`
    );
    return response;
  }
}

export default new SectionService();
