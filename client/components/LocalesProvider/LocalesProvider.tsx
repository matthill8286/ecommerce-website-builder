import { useRouter } from "next/router";
import React, { useState } from "react";
import { IntlProvider } from "react-intl";

import apolloClient from "@/lib/graphql";
import { DEFAULT_LOCALE, localeToEnum } from "@/lib/regions";
import createSafeContext from "@/lib/useSafeContext";

export interface RegionsConsumerProps {
  currentLocale: string;
  query: {
    locale: string;
  };
  setCurrentLocale: (slug: string) => void;
}

export const [useContext, Provider] = createSafeContext<RegionsConsumerProps>();

export const LocalesProvider: React.FC = ({ children }) => {
  const router = useRouter();

  const [currentLocaleSlug, setCurrentLocaleSlug] = useState(
    router.query.locale?.toString() || DEFAULT_LOCALE
  );

  const setCurrentLocale = (channel: string) => {
    setCurrentLocaleSlug(channel);
    apolloClient.clearStore();
  };

  const providerValues: RegionsConsumerProps = {
    setCurrentLocale: setCurrentLocale,
    currentLocale: localeToEnum(currentLocaleSlug),
    query: {
      locale: localeToEnum(currentLocaleSlug),
    },
  };

  return (
    <Provider value={providerValues}>
      <IntlProvider
        messages={null}
        locale={currentLocaleSlug}
        defaultLocale={DEFAULT_LOCALE}
      >
        {children}
      </IntlProvider>
    </Provider>
  );
};

export const useLocales = useContext;

export default LocalesProvider;
