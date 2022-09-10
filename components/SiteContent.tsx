import Link from "components/header/links/Link";
import Page from "components/Page";
import { useTranslation } from "i18n";
import styled from "styled-components";

const AccessibleContent = styled.p`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const SiteContent = () => {
  const { t } = useTranslation();
  const nitor = <Link url="https://www.nitor.com/">{t("page.nitor")}</Link>;
  const haagaHelia = (
    <Link url="https://www.haaga-helia.fi/">{t("page.haagaHelia")}</Link>
  );

  return (
    <Page pageTitle={t("site.headline")}>
      <AccessibleContent>
        {[
          t("page.developerAt"),
          t("page.nitor"),
          t("page.graduatedFrom"),
          t("page.haagaHelia"),
          ".",
        ].join("")}
      </AccessibleContent>
      <p aria-hidden="true">
        {t("page.developerAt")}
        {nitor}
        {t("page.graduatedFrom")}
        {haagaHelia}.
      </p>
      <p>{t("page.expertise")}</p>
    </Page>
  );
};

export default SiteContent;
