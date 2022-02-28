import { ApolloQueryResult } from "@apollo/client";
import { ParsedUrlQuery } from "querystring";

import apolloClient from "../graphql";
import { LOCALES, Path } from "../regions";
import {
  PagePathsQuery,
  PagePathsQueryVariables,
  PagePathsDocument,
} from "@/strapi/hooks";

export interface PagePathArguments extends ParsedUrlQuery {
  locale: string;
  slug: string;
}

export const pagePaths = async () => {
  let paths: Path<PagePathArguments>[] = [];

  let hasNextPage = true;

  while (hasNextPage) {
    const response: ApolloQueryResult<PagePathsQuery> =
      await apolloClient.query<PagePathsQuery, PagePathsQueryVariables>({
        query: PagePathsDocument,
        fetchPolicy: "no-cache",
      });

    const edges = response.data.pages.data;
    if (!edges) {
      break;
    }
    const responseSlugs: string[] = edges.map((edge) => edge.attributes.slug);

    for (let locale of LOCALES) {
      responseSlugs.forEach((slug) => {
        paths.push({
          params: {
            locale: locale.slug,
            slug,
          },
        });
      });
    }
  }

  return paths;
};
