import { useTranslation } from "i18n";
import NextHead from "next/head";

const ogLocales = ["fi_FI", "en_US"];

const Head = () => {
  const { t, locale } = useTranslation();

  const description = t("site.description");
  const title = `Tatu Arvela — ${t("site.headline")}`;
  const image = `https://tatuarvela.com/image.png`;

  const ogLocale = ogLocales.find((item) => item.includes(locale));
  const alternateOgLocale = ogLocales.find((item) => item !== ogLocale);

  const canonicalUrl =
    locale === "fi" ? "https://tatuarvela.com/fi" : "https://tatuarvela.com";

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={alternateOgLocale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content="#040f3d" />

      <link rel="canonical" href={canonicalUrl} />
    </NextHead>
  );
};

export default Head;
