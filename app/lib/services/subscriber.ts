import type { Email } from "@/app/types/authServiceType";
import httpClient from "../http/client";

class SubscriberService {
  async getSubscriberLists(page: number, size: number) {
    return httpClient.get("/subscriber/admin/get-subscriber-lists", {
      params: { page, size },
    });
  }

  async createSubscriber(payload: Email) {
    return httpClient.post("/subscriber/create-subscriber", payload);
  }

  async unsubscribeSubscriber(payload: Email) {
    return httpClient.post("/subscriber/unsubscribe-subscriber", payload);
  }
}

export const subscriberService = new SubscriberService();
export default subscriberService;
