// import { ApolloQueryResult } from "@apollo/client";
// import {
//   GetStaticPaths,
//   GetStaticPropsContext,
//   InferGetStaticPropsType,
// } from "next";
import Layout from "@/components/Layout";
import apolloClient from "@/lib/graphql";
import { contextToRegionQuery } from "@/lib/regions";
import { pagePaths } from "@/lib/ssr/page";
import { ApolloQueryResult } from "@apollo/client";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import React, { ReactElement } from "react";
// import { useIntl } from "react-intl";

// import { HomepageBlock, Layout } from "@/components";
// import BaseSeo from "@/components/seo/BaseSeo";
// import apolloClient from "@/lib/graphql";
// import { contextToRegionQuery } from "@/lib/regions";
// import { homepagePaths } from "@/lib/ssr/homepage";
import PagePage from "./page/[slug]";
// import {
//   HomepageBlocksQuery,
//   HomepageBlocksQueryDocument,
//   HomepageBlocksQueryVariables,
// } from "@/saleor/api";

const Home = ({ context }) => {
  // const t = useIntl();

  console.log(">> logging", { context });
  return (
    <>
      {/* <BaseSeo /> */}
      <div className="py-10">
        <main>Home Page</main>
      </div>
    </>
  );
};

export default Home;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = homepagePaths();
//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const result: ApolloQueryResult<HomepageBlocksQuery> =
//     await apolloClient.query<HomepageBlocksQuery, HomepageBlocksQueryVariables>(
//       {
//         query: HomepageBlocksQueryDocument,
//         variables: { slug: "homepage", ...contextToRegionQuery(context) },
//       }
//     );
//   return {
//     props: {
//       menuData: result?.data,
//     },
//     revalidate: 60 * 60, // value in seconds, how often ISR will trigger on the server
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   // const paths = await pagePaths();
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const pageSlug = context.params?.slug?.toString()!;

//   console.log(">> logging", { t: context.params });

//   const response: ApolloQueryResult<GetPagesQuery> = await apolloClient.query<
//     GetPagesQuery,
//     GetPagesQueryVariables
//   >({
//     query: GetPagesDocument,
//     variables: {
//       slug: "home",
//       publicationState: PublicationState.Live,
//       locale: "en-GB",
//     },
//   });

//   return {
//     props: {
//       context,
//       page: response,
//     },
//   };
// };

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
