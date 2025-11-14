import { type NextRequest, NextResponse } from "next/server";

const AUTH_PAGES = ["/login", "/register", "/reset-password"];

export default async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isAuthPage = AUTH_PAGES.some((page) => pathname.startsWith(page));

  if (isAuthPage) {
    const accessToken = request.cookies.get("access_token");
    const refreshToken = request.cookies.get("refresh_token");

    if (accessToken && refreshToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/reset-password"],
};
