import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "小李生活志 | Payments",
  description: "管理您的支付记录  | Manage your payment records",
  keywords: "Payments, 小李生活志, 支付记录",
};

export default function PaymentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
