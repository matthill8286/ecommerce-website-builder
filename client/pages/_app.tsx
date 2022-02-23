import { ApolloProvider } from "@apollo/client";
import { NextPage } from "next";
import App, { AppProps } from "next/app";
import ErrorPage from "next/error";
import Head from "next/head";
import React, { ReactElement, ReactNode } from "react";
import { DefaultSeo } from "next-seo";
import { getStrapiMedia } from "@/utils/media";
import { getGlobalData } from "@/utils/api";
import apolloClient from "@/lib/graphql";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  // Extract the data we need
  const { global } = pageProps;
  if (global == null) {
    return <ErrorPage statusCode={404} />;
  }

  console.log(">> logging", { Component, pageProps });

  const { metadata, favicon, metaTitleSuffix } = global.attributes;

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(favicon.data?.attributes?.url ?? "")}
        />
      </Head>
      {/* Global site metadata */}
      <DefaultSeo
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
      />

      <ApolloProvider client={apolloClient}>
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </>
  );
};

MyApp.getInitialProps = async (appContext: any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const globalLocale = await getGlobalData(appContext.router.locale);

  console.log(">> logging", { appProps, appContext });

  return {
    ...appProps,
    pageProps: {
      global: globalLocale,
    },
  };
};

export default MyApp;
