// import { ApolloQueryResult } from "@apollo/client";
// import {
//   GetStaticPaths,
//   GetStaticPropsContext,
//   InferGetStaticPropsType,
// } from "next";
// import Custom404 from "pages/404";
import Layout from "@/components/Layout";
import apolloClient from "@/lib/graphql";
import { usePaths } from "@/lib/paths";
import { pagePaths } from "@/lib/ssr/page";
import { ApolloQueryResult } from "@apollo/client";
import { Card, Heading } from "@matthill8286/atomic-ui";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

// import { Layout, PageHero, ProductCollection } from "@/components";
// import CollectionsPageSeo from "@/components/seo/CollectionsPageSeo";
// import apolloClient from "@/lib/graphql";
// import { contextToRegionQuery } from "@/lib/regions";
// import { collectionPaths } from "@/lib/ssr/collection";
import { CollectionsDocument, CollectionsQuery } from "../strapi/hooks";
// import {
//   CollectionBySlugDocument,
//   CollectionBySlugQuery,
//   CollectionBySlugQueryVariables,
// } from "@/saleor/api";

const CollectionsPage = ({ collections }: any) => {
  console.log(">> logging", { collections });
  const router = useRouter();
  const paths = usePaths();

  if (!collections.length) {
    return "No collections available, please configure them if you think this is a mistake";
  }

  const collectionsMap = () =>
    collections.map(({ id, attributes }) => (
      <Card
        key={id}
        elevation={1}
        elevationHover={3}
        padding="md"
        noBorder={"none"}
      >
        <Heading
          scale="level-3"
          onClick={() =>
            router.push(paths.collection._slug(attributes.slug).$url())
          }
        >
          {attributes.name}
        </Heading>
      </Card>
    ));

  return <>{collectionsMap()}</>;
};

// {/* <CollectionsPageSeo collection={collection} />
// <header className="mb-4 pt-4">
//   <div className="max-w-7xl mx-auto px-8">
//     <PageHero entity={collection} />
//   </div>
// </header>
// <main>
//   <div className="max-w-7xl mx-auto px-8">
//     <ProductCollection filter={{ collections: [collection?.id] }} />
//   </div>
// </main> */}

export default CollectionsPage;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = await pagePaths();
//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

export const getStaticProps = async (context?: GetStaticPropsContext) => {
  const response: ApolloQueryResult<CollectionsQuery> =
    await apolloClient.query<CollectionsQuery>({
      query: CollectionsDocument,
    });
  return {
    props: {
      collections: response.data.collections.data,
    },
  };
};

CollectionsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
