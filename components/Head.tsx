import { useTranslation } from "i18n";
import NextHead from "next/head";

const Head = () => {
  const { t, locale } = useTranslation();

  const description = t("site.description");
  const title = `Tatu Arvela — ${t("site.headline")}`;
  const image = `https://tatuarvela.com/image.png`;

  return (
    <NextHead>
      <html lang={locale} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content="#040f3d" />
    </NextHead>
  );
};

export default Head;
