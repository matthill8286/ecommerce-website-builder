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

const ProductPage = ({ product }: any) => {
  const router = useRouter();
  // const paths = usePaths();
  // const t = useIntl();
  // const { currentChannel, formatPrice } = useLocales();

  // const { checkoutToken, setCheckoutToken, checkout } = useCheckout();

  // const [createCheckout] = useCreateCheckoutMutation();
  // const { user } = useAuthState();
  // const locale = router.query.locale?.toString() || DEFAULT_LOCALE;

  // const [addProductToCheckout] = useCheckoutAddProductLineMutation();
  // const [loadingAddToCheckout, setLoadingAddToCheckout] = useState(false);
  // const [addToCartError, setAddToCartError] = useState("");

  if (!product?.id) {
    return "<Custom404 />";
  }

  // const selectedVariantID = getSelectedVariantID(product, router);

  // const selectedVariant =
  //   product?.variants?.find((v) => v?.id === selectedVariantID) || undefined;

  // const onAddToCart = async () => {
  //   // Clear previous error messages
  //   setAddToCartError("");

  //   // Block add to checkout button
  //   setLoadingAddToCheckout(true);
  //   const errors: CheckoutError[] = [];

  //   if (!selectedVariantID) {
  //     return;
  //   }

  //   if (!!checkout) {
  //     // If checkout is already existing, add products
  //     const { data: addToCartData } = await addProductToCheckout({
  //       variables: {
  //         checkoutToken: checkoutToken,
  //         variantId: selectedVariantID,
  //         locale: localeToEnum(locale),
  //       },
  //     });
  //     addToCartData?.checkoutLinesAdd?.errors.forEach((e) => {
  //       if (!!e) {
  //         errors.push(e);
  //       }
  //     });
  //   } else {
  //     // Theres no checkout, we have to create one
  //     const { data: createCheckoutData } = await createCheckout({
  //       variables: {
  //         email: user?.email || "anonymous@example.com",
  //         channel: currentChannel.slug,
  //         lines: [
  //           {
  //             quantity: 1,
  //             variantId: selectedVariantID,
  //           },
  //         ],
  //       },
  //     });
  //     createCheckoutData?.checkoutCreate?.errors.forEach((e) => {
  //       if (!!e) {
  //         errors.push(e);
  //       }
  //     });
  //     if (createCheckoutData?.checkoutCreate?.checkout?.token) {
  //       setCheckoutToken(createCheckoutData?.checkoutCreate?.checkout?.token);
  //     }
  //   }
  //   // Enable button
  //   setLoadingAddToCheckout(false);

  //   if (errors.length === 0) {
  //     // Product successfully added, redirect to cart page
  //     router.push(paths.cart.$url());
  //     return;
  //   }

  //   // Display error message
  //   const errorMessages =
  //     errors.map((e) => {
  //       return e.message || "";
  //     }) || [];
  //   setAddToCartError(errorMessages.join("\n"));
  // };

  // const isAddToCartButtonDisabled =
  //   !selectedVariant ||
  //   selectedVariant?.quantityAvailable === 0 ||
  //   loadingAddToCheckout;

  // const description = translate(product, "description");

  // const price =
  //   selectedVariant?.pricing?.price?.gross ||
  //   product.pricing?.priceRange?.start?.gross;

  return (
    <>
      {router.query.locale}
      {product.name}
    </>
  );
};

export default ProductPage;

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Temporally do not render all possible products during the build time
//   // const paths = await productPaths();
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const productSlug = context.params?.slug?.toString()!;
//   const response: ApolloQueryResult<ProductBySlugQuery> =
//     await apolloClient.query<ProductBySlugQuery, ProductBySlugQueryVariables>({
//       query: ProductBySlugDocument,
//       variables: {
//         slug: productSlug,
//         ...contextToRegionQuery(context),
//       },
//     });
//   return {
//     props: {
//       product: response.data.product,
//     },
//     revalidate: 60, // value in seconds, how often ISR will trigger on the server
//   };
// };

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
