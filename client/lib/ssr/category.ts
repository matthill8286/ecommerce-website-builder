import { ParsedUrlQuery } from "querystring";

export interface CategoryPathArguments extends ParsedUrlQuery {
  locale: string;
  slug: string;
}

export const categoryPaths = async () => {};
