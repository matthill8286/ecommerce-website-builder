// import { ApolloQueryResult } from "@apollo/client";
// import {
//   GetStaticPaths,
//   GetStaticPropsContext,
//   InferGetStaticPropsType,
// } from "next";
// import Custom404 from "pages/404";
// import { ReactElement } from "react";

import Layout from "@/components/Layout";
import apolloClient from "@/lib/graphql";
import { contextToRegionQuery } from "@/lib/regions";
import { pagePaths } from "@/lib/ssr/page";
import { GetPagesQueryVariables } from "@/strapi/api";
import { ApolloQueryResult } from "@apollo/client";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { ReactElement } from "react";

// import { Layout, RichText } from "@/components";
// import apolloClient from "@/lib/graphql";
// import { contextToRegionQuery } from "@/lib/regions";
// import { pagePaths } from "@/lib/ssr/page";
// import { translate } from "@/lib/translations";
// import { PageDocument, PageQuery, PageQueryVariables } from "@/saleor/api";

const PagePage = ({ page, children }) => {
  console.log(">> logging", { page });
  if (!page?.id) {
    return "<Custom404 />";
  }

  // const content = translate(page, "content");

  console.log(">> logging", { t: page.id });

  return <main className="max-w-7xl mx-auto pt-8 px-8">{children}</main>;
};

export default PagePage;

export interface pathParams {
  locale: string;
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await pagePaths();
  return {
    paths,
    fallback: "blocking",
  };
};

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const pageSlug = context.params?.slug?.toString()!;
//   console.log(">> logging", { pageSlug });
//   const response: ApolloQueryResult<GetPagesQuery> = await apolloClient.query<
//     GetPagesQuery,
//     GetPagesQueryVariables
//   >({
//     query: GetPagesDocument,
//     variables: {
//       slug: pageSlug,
//       publicationState: "LIVE",
//       locale: "en-GB",
//     },
//   });

//   console.log(">> logging", { response });

//   return {
//     props: {
//       page: response.data.pages,
//     },
//   };
// };

PagePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
