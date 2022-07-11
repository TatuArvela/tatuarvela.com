import SiteContent from "../components/SiteContent";
import { fi, I18nProvider } from "../i18n";

const FinnishPage = () => (
  <I18nProvider value={fi}>
    <SiteContent />
  </I18nProvider>
);

export default FinnishPage;
