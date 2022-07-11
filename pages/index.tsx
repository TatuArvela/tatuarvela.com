import SiteContent from "../components/SiteContent";
import { en, I18nProvider } from "../i18n";

const IndexPage = () => (
  <I18nProvider value={en}>
    <SiteContent />
  </I18nProvider>
);

export default IndexPage;
