import type { AxiosProgressEvent } from "axios";

interface Status {
  status: number;
}

export interface SuccessResponse<T = Record<string, never>> extends Status {
  message: string;
  data: T | null; // 后端使用 Optional[Any]，对应 T | null
}

export interface ErrorResponse extends Status {
  error: string; // 后端返回的是字符串，httpClient 保证一定有值
}

export type APIResponse<T = Record<string, never>> = SuccessResponse<T> | ErrorResponse;

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface RequestOptions {
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean | null> | Record<string, unknown> | object;
  data?:
    | Record<string, string | number | boolean | null | Record<string, unknown>>
    | FormData
    | object;
  timeout?: number;
  uploadProgress?: (progressEvent: AxiosProgressEvent) => void;
}

/**
 * 语言设置类型
 */
export type SupportedLocale = "zh" | "en";
