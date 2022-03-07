// import { ApolloQueryResult } from "@apollo/client";
// import { useAuthState } from "@saleor/sdk";
// import clsx from "clsx";
// import {
//   GetStaticPaths,
//   GetStaticPropsContext,
//   InferGetStaticPropsType,
// } from "next";
// import Link from "next/link";
import Layout from "@/components/Layout";
import apolloClient from "@/lib/graphql";
import { contextToRegionQuery } from "@/lib/regions";
import { pagePaths } from "@/lib/ssr/page";
import { ApolloQueryResult } from "@apollo/client";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
// import Custom404 from "pages/404";
import React, { ReactElement } from "react";
// import { useIntl } from "react-intl";

// import { Layout, RichText, VariantSelector } from "@/components";
// import { AttributeDetails } from "@/components/product/AttributeDetails";
// import { ProductGallery } from "@/components/product/ProductGallery";
// import { useLocales } from "@/components/LocalesProvider";
// import { ProductPageSeo } from "@/components/seo/ProductPageSeo";
// import { messages } from "@/components/translations";
// import apolloClient from "@/lib/graphql";
// import { usePaths } from "@/lib/paths";
// import { getSelectedVariantID } from "@/lib/product";
// import { useCheckout } from "@/lib/providers/CheckoutProvider";
// import {
//   contextToRegionQuery,
//   DEFAULT_LOCALE,
//   localeToEnum,
// } from "@/lib/regions";
// import { productPaths } from "@/lib/ssr/product";
// import { translate } from "@/lib/translations";
import {
  ProductByIdQuery,
  ProductByIdDocument,
  ProductByIdQueryVariables,
} from "@/strapi/hooks";
import { Product } from "@/strapi/api";
import { useProductByIdQuery } from "../../strapi/hooks";
// import {
//   CheckoutError,
//   ProductBySlugDocument,
//   ProductBySlugQuery,
//   ProductBySlugQueryVariables,
//   useCheckoutAddProductLineMutation,
//   useCreateCheckoutMutation,
// } from "@/saleor/api";

export type OptionalQuery = {
  variant?: string;
};

const ProductPage = () => {
  // console.log(">> logging", { product });

  const { data, loading, error } = useProductByIdQuery({
    variables: { id: "1" },
  });

  if (!data?.product.data || loading) {
    return null;
  }

  return <>{data.product.data.attributes.name}</>;
};

export default ProductPage;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = await pagePaths();
//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const response: ApolloQueryResult<ProductByIdQuery> =
//     await apolloClient.query<ProductByIdQuery, ProductByIdQueryVariables>({
//       query: ProductByIdDocument,
//       variables: {
//         id: "1",
//       },
//     });
//   return {
//     props: {
//       product: response.data.product,
//     },
//   };
// };

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
