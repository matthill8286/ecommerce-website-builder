// import { ApolloQueryResult } from "@apollo/client";
// import {
//   GetStaticPaths,
//   GetStaticPropsContext,
//   InferGetStaticPropsType,
// } from "next";
// import Custom404 from "pages/404";
import Layout from "@/components/Layout";
import apolloClient from "@/lib/graphql";
import React, { ReactElement } from "react";

// import { Layout, PageHero, ProductCollection } from "@/components";
// import CategoriesPageSeo from "@/components/seo/CategoriesPageSeo";
// import apolloClient from "@/lib/graphql";
// import { contextToRegionQuery } from "@/lib/regions";
// import { categoryPaths } from "@/lib/ssr/category";
import {
  CategoriesDocument,
  PublicationState,
  useCategoriesQuery,
} from "@/strapi/hooks";
import { ActionLink, Card, Heading } from "@matthill8286/atomic-ui";
import { usePaths } from "@/lib/paths";
import { useRouter } from "next/router";
import Link from "next/link";
// import {
//   CategoryBySlugDocument,
//   CategoryBySlugQuery,
//   CategoryBySlugQueryVariables,
// } from "@/saleor/api";

const CategoriesPage = ({ categories }) => {
  console.log(">> logging", { categories });
  const paths = usePaths();
  const router = useRouter();

  if (!categories) {
    return null;
  }

  // const { data, loading, error } = useCategoriesQuery();

  // console.log(">> logging", { data, error, loading });
  const categoriesMap = () =>
    categories.map(({ id, attributes }) => (
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
            router.push(paths.category._slug(attributes.slug).$url())
          }
        >
          {attributes.name}
        </Heading>
      </Card>
    ));

  return <>{categoriesMap()}</>;
};

export default CategoriesPage;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = await categoryPaths();
//   return {
//     paths: paths,
//     fallback: "blocking",
//   };
// };

export const getStaticProps = async () => {
  const response = await apolloClient.query({
    query: CategoriesDocument,
  });
  return {
    props: {
      categories: response.data.categories.data || [],
    },
  };
};

CategoriesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
