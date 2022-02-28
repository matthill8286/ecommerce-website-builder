import { NextPage } from "next";
import App, { AppProps } from "next/app";
import ErrorPage from "next/error";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { Provider } from "mobx-react";
import React, { ReactElement, ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { getSnapshot, ModelCreationType } from "mobx-state-tree";
import apolloClient from "@/lib/graphql";

// import { getStrapiMedia } from "@/utils/media";
// import { getGlobalData } from "@/utils/api";

import { initializeStore, useStore, IStore } from "@/lib/store";
import LocalesProvider from "@/components/LocalesProvider";
import { alternateTheme, ThemeProvider } from "@matthill8286/atomic-ui";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  store: ModelCreationType<IStore>;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  const store = useStore(pageProps.initialState);
  // Extract the data we need

  // const { global } = pageProps;
  // if (global == null) {
  //   return <ErrorPage statusCode={404} />;
  // }

  console.log(">> logging", { pageProps, store });

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

      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <ThemeProvider theme={alternateTheme}>
            <SessionProvider session={pageProps.session} refetchInterval={0}>
              <LocalesProvider>
                {getLayout(<Component {...pageProps} />)}
              </LocalesProvider>
            </SessionProvider>
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    </>
  );
};

export function getServerSideProps() {
  const store = initializeStore();

  return { props: { initialState: getSnapshot(store) } };
}

export default MyApp;
