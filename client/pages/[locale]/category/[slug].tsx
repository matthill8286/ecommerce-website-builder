// import { ApolloQueryResult } from "@apollo/client";
// import {
//   GetStaticPaths,
//   GetStaticPropsContext,
//   InferGetStaticPropsType,
// } from "next";
// import Custom404 from "pages/404";
import Layout from "@/components/Layout";
import React, { ReactElement } from "react";

// import { Layout, PageHero, ProductCollection } from "@/components";
// import CategoryPageSeo from "@/components/seo/CategoryPageSeo";
// import apolloClient from "@/lib/graphql";
// import { contextToRegionQuery } from "@/lib/regions";
// import { categoryPaths } from "@/lib/ssr/category";
// import {
//   CategoryBySlugDocument,
//   CategoryBySlugQuery,
//   CategoryBySlugQueryVariables,
// } from "@/saleor/api";

const CategoryPage = ({ category }: any) => {
  if (!category) {
    return "<Custom404 />";
  }
  return <>{category}</>;
};

export default CategoryPage;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = await categoryPaths();
//   return {
//     paths: paths,
//     fallback: "blocking",
//   };
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const categorySlug = context.params?.slug?.toString()!;
//   const response: ApolloQueryResult<CategoryBySlugQuery> =
//     await apolloClient.query<CategoryBySlugQuery, CategoryBySlugQueryVariables>(
//       {
//         query: CategoryBySlugDocument,
//         variables: {
//           slug: categorySlug,
//           locale: contextToRegionQuery(context).locale,
//         },
//       }
//     );
//   return {
//     props: {
//       category: response.data.category,
//     },
//   };
// };

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
