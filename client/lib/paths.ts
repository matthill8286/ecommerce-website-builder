import { useLocales } from "@/components/LocalesProvider";
import { pagesPath } from "@/lib/$path";

export const usePaths = () => {
  const { currentLocale: locale } = useLocales();
  return pagesPath._locale(locale);
};
