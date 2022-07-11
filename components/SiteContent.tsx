import Link from "components/header/links/Link";
import Page from "components/Page";
import { useTranslation } from "i18n";

const SiteContent = () => {
  const { t } = useTranslation();
  const nitor = <Link url="https://www.nitor.com/">{t("page.nitor")}</Link>;
  const haagaHelia = (
    <Link url="https://www.haaga-helia.fi/">{t("page.haagaHelia")}</Link>
  );

  return (
    <Page pageTitle={t("site.headline")}>
      <p>
        {t("page.developerAt")}
        {nitor}
        {t("page.graduatedFrom")}
        {haagaHelia}
      </p>
      <p>{t("page.expertise")}</p>
    </Page>
  );
};

export default SiteContent;
