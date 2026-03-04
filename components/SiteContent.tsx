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

  return (
    <Page pageTitle={t("site.headline")}>
      <p>{t("page.expertise")}</p>
    </Page>
  );
};

export default SiteContent;
