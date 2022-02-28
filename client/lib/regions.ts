import { GetStaticPropsContext } from "next";

export const LOCALES = [
  {
    slug: "en-GB",
    code: "EN_GB",
    name: "British English",
  },
];
export const DEFAULT_LOCALE = "en-GB";

export interface RegionCombination {
  localeSlug: string;
}

export const regionCombinations = () => {
  const combinations: RegionCombination[] = [];

  LOCALES.forEach((locale) => {
    combinations.push({ localeSlug: locale.slug });
  });

  return combinations;
};

export interface Path<T> {
  params: T;
}

export const localeToEnum = (localeSlug: string): string => {
  const chosenLocale = LOCALES.find(({ slug }) => slug === localeSlug)?.code;
  if (chosenLocale) {
    return chosenLocale;
  }
  return LOCALES.find(({ slug }) => slug === DEFAULT_LOCALE)?.code || "EN_GB";
};

export const contextToRegionQuery = (context: GetStaticPropsContext) => {
  return {
    locale: localeToEnum(context.params?.locale?.toString() || DEFAULT_LOCALE),
  };
};

export const languageCodeToLocale = (locale: string) => {
  // Converts locale from EN_GB to en-GB
  const splitted = locale.split("_");
  splitted[0] = splitted[0].toLowerCase();
  return splitted.join("-");
};
