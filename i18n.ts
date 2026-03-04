import React from "react";

// Simplistic custom i18n solution because others were a pain to configure with static HTML export

export const en = {
  locale: "en",
  translations: {
    site: {
      description:
        "Creating effective, dazzling and high-end digital services and web applications.",
      headline: "I create digital things.",
    },
    navigation: {
      contact: "Contact",
      switchLanguage: "Suomeksi",
      close: "Close menu",
      open: "Open menu",
    },
    page: {
      expertise:
        "My expertise is creating effective, dazzling and high-end digital services and web applications.",
    },
    contact: {
      title: "Contact me",
      name: "Name",
      email: "Email address",
      message: "Message",
      send: "Send",
    },
    footer: {
      allRightsReserved: "All rights reserved.",
    },
  },
};

type I18n = typeof en;

export const fi: I18n = {
  locale: "fi",
  translations: {
    site: {
      description:
        "Luon vaikuttavia, häikäiseviä ja korkealaatuisia digipalveluita ja verkkosovelluksia.",
      headline: "Teen digitaalisia juttuja.",
    },
    navigation: {
      contact: "Ota yhteyttä",
      switchLanguage: "In English",
      close: "Sulje valikko",
      open: "Avaa valikko",
    },
    page: {
      expertise:
        "Erityisosaamistani on luoda vaikuttavia, häikäiseviä ja korkealaatuisia digipalveluita ja verkkosovelluksia.",
    },
    contact: {
      title: "Ota yhteyttä",
      name: "Nimi",
      email: "Sähköpostiosoite",
      message: "Viesti",
      send: "Lähetä",
    },
    footer: {
      allRightsReserved: "Kaikki oikeudet pidätetään.",
    },
  },
};

const I18nContext = React.createContext<I18n>(undefined);
I18nContext.displayName = "TranslationContext";

export const I18nProvider = I18nContext.Provider;

const getPropByPath = (
  object: Record<string, unknown> | unknown,
  path: string | string[],
  defaultValue: string,
): string => {
  const _path = Array.isArray(path) ? path : path.split(".");
  if (object && _path.length) {
    return getPropByPath(
      (object as Record<string, unknown>)[_path.shift()!],
      _path,
      defaultValue,
    );
  }
  return object === undefined ? defaultValue : (object as string);
};

export const useTranslation = () => {
  const i18n = React.useContext<I18n>(I18nContext);
  const t = (key: string) => getPropByPath(i18n.translations, key, key);
  const locale = i18n.locale;
  return { t, locale };
};
