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
import { usePaths } from "@/lib/paths";
import { pagePaths } from "@/lib/ssr/page";
import {
  Product,
  ProductsCollectionQueryVariables,
  PublicationState,
  useProductsCollectionQuery,
} from "@/strapi/hooks";
import { ApolloQueryResult } from "@apollo/client";
import { Card, Heading } from "@matthill8286/atomic-ui";
import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
// import Custom404 from "pages/404";
import React, { ReactElement } from "react";
// import { useIntl } from "react-intl";

// import { Layout, RichText, VariantSelector } from "@/components";
// import { AttributeDetails } from "@/components/product/AttributeDetails";
// import { ProductGallery } from "@/components/product/ProductGallery";
// import { useLocales } from "@/components/LocalesProvider";
// import { ProductsPageSeo } from "@/components/seo/ProductsPageSeo";
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
  ProductsCollectionQuery,
  ProductsCollectionDocument,
  ProductsCollectionQueryResult,
} from "../strapi/hooks";
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

const ProductsPage = ({ products }: ProductsCollectionQueryResult["data"]) => {
  const router = useRouter();

  console.log(">> logging", { products });

  // const { data, loading, error } = useProductsCollectionQuery();

  // console.log(">> logging", { data, loading, error });

  const paths = usePaths();

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

  // if (!product?.id) {
  //   return "<Custom404 />";
  // }

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

  if (!products) {
    return null;
  }

  const productsMap = () =>
    products.data.map(({ id, attributes }) => (
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
            router.push(paths.product._slug(attributes.slug).$url())
          }
        >
          {attributes.name}
        </Heading>
      </Card>
    ));

  return <>{productsMap()}</>;
};

export default ProductsPage;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = await pagePaths();
//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

export const getStaticProps = async () => {
  const response: ApolloQueryResult<ProductsCollectionQuery> =
    await apolloClient.query<
      ProductsCollectionQuery,
      ProductsCollectionQueryVariables
    >({
      query: ProductsCollectionDocument,
    });
  return {
    props: {
      products: response.data.products,
    },
  };
};

ProductsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
