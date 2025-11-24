import { useLocale } from "next-intl";
import useSWR from "swr";

export default function useSection() {
  const locale = useLocale();

  const { data: sections, error, isLoading } = useSWR(["/section/get-section-lists", locale]);

  return { sections, error, isLoading };
}

export function useSectionDetailsBySlug(slug: string | null) {
  const locale = useLocale();

  const {
    data: section,
    error,
    isLoading,
  } = useSWR(slug ? [`/section/get-section-details-by-slug/${slug}`, locale] : null);

  return { section, error, isLoading };
}
