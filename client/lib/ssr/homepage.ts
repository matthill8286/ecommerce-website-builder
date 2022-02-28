import { ParsedUrlQuery } from "querystring";

import { Path, regionCombinations } from "../regions";

export interface ProductPathArguments extends ParsedUrlQuery {
  locale: string;
}

export const homepagePaths = () => {
  const paths: Path<ProductPathArguments>[] = regionCombinations().map(
    (combination) => ({
      params: {
        locale: combination.localeSlug,
      },
    })
  );
  return paths;
};
