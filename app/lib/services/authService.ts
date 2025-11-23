import httpClient from "../http/client";
import type {
  SendResetCodeRequest,
  SendVerificationCodeRequest,
  CreateUserAccountRequest,
  ResetUserPasswordRequest,
  ResetLoggedInUserPasswordRequest,
  AccountLoginRequest,
} from "@/app/types/authServiceType";

class AuthService {
  async sendVerificationCode(payload: SendVerificationCodeRequest) {
    const response = await httpClient.post(
      "/auth/send-verification-code",
      payload
    );
    return response;
  }

  async sendResetCode(payload: SendResetCodeRequest) {
    const response = await httpClient.post("/auth/send-reset-code", payload);
    return response;
  }

  async createUserAccount(payload: CreateUserAccountRequest) {
    const response = await httpClient.post(
      "/auth/create-user-account",
      payload
    );
    return response;
  }

  async resetUserPassword(payload: ResetUserPasswordRequest) {
    const response = await httpClient.post(
      "/auth/reset-user-password",
      payload
    );
    return response;
  }

  async resetLoggedInUserPassword(payload: ResetLoggedInUserPasswordRequest) {
    const response = await httpClient.post(
      "/auth/reset-logged-in-user-password",
      payload
    );
    return response;
  }

  async accountLogin(payload: AccountLoginRequest) {
    const response = await httpClient.post("/auth/account-login", payload);
    return response;
  }

  async silentAccountLogin(payload: AccountLoginRequest) {
    // 静默登录，不显示 toast 提示
    const response = await httpClient.post("/auth/account-login", payload);
    return response;
  }

  githubLogin() {
    // 直接重定向到后端的 GitHub OAuth 授权 URL
    const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    window.location.href = `${backendUrl}/auth/github-login`;
  }

  googleLogin() {
    // 直接重定向到后端的 Google OAuth 授权 URL
    const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    window.location.href = `${backendUrl}/auth/google-login`;
  }

  async accountLogout() {
    const response = await httpClient.delete("/auth/account-logout");
    return response;
  }

  async checkAuthToken() {
    const response = await httpClient.get("/auth/check-auth-token");
    return response;
  }
}

export const authService = new AuthService();
