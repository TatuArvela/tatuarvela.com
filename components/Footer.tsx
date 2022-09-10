import { useTranslation } from "i18n";
import styled from "styled-components";
import { animFadeIn } from "styles/animations";
import { FONT_SIZE_TINY } from "styles/themeVariables";

const StyledFooter = styled.div`
  ${animFadeIn};
  font-size: ${FONT_SIZE_TINY};
  text-align: center;
`;

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>{`© ${year} Tatu Arvela. ${t("footer.allRightsReserved")}`}</p>
    </StyledFooter>
  );
};

export default Footer;
