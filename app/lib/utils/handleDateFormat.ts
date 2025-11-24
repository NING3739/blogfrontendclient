import type { useFormatter } from "next-intl";

export type DatePrecision = "day" | "second" | "short";

type Formatter = ReturnType<typeof useFormatter>;

const dateOptions = {
  short: { month: "short", day: "numeric" } as const,
  day: { year: "numeric", month: "2-digit", day: "2-digit" } as const,
  second: {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  } as const,
};

export const handleDateFormat = (
  data: string,
  formatter: Formatter,
  precision: DatePrecision = "second",
): string => {
  if (!data) return "";

  const date = new Date(`${data}Z`);
  if (Number.isNaN(date.getTime())) return data;

  return formatter.dateTime(date, dateOptions[precision]);
};
