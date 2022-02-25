import { ApolloProvider } from "@apollo/client";
import { NextPage } from "next";
import App, { AppProps } from "next/app";
import ErrorPage from "next/error";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

import React, { ReactElement, ReactNode } from "react";
import { DefaultSeo } from "next-seo";
import { getStrapiMedia } from "@/utils/media";
import { getGlobalData } from "@/utils/api";
import apolloClient from "@/lib/graphql";
import { StoreContext } from "@/models"
import rootStore from "@/lib/graphql";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  // Extract the data we need
  // const { global } = pageProps;
  // if (global == null) {
  //   return <ErrorPage statusCode={404} />;
  // }

  console.log(">> logging", { pageProps });

  // const { metadata, favicon, metaTitleSuffix } = global.data.attributes;

  return (
    <>
      <Head>
        {/* <link
          rel="shortcut icon"
          href={getStrapiMedia(favicon.data?.attributes?.url ?? "")}
        /> */}
      </Head>
      {/* Global site metadata */}
      {/* <DefaultSeo
        titleTemplate={`%s | ${metaTitleSuffix}`}
        title="Page"
        description={metadata.metaDescription}
        openGraph={{
          images: Object.values(
            metadata.shareImage.data.attributes.formats
          ).map((image: any) => {
            return {
              url: getStrapiMedia(image.url),
              width: image.width,
              height: image.height,
            };
          }),
        }}
        twitter={{
          cardType: metadata.twitterCardType,
          handle: metadata.twitterUsername,
        }}
      /> */}

      <StoreContext.Provider client={rootStore}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
      </StoreContext.Provider>
    </>
  );
};

export default MyApp;
