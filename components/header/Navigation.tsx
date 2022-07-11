import { useTranslation } from "i18n";
import styled from "styled-components";
import { BREAKPOINT_MOBILE, FONT_SIZE_DEFAULT } from "styles/themeVariables";

import Link from "./links/Link";
import LinkButton from "./links/LinkButton";
import navigationLinks from "./navigationLinks";
import useSwitchLocale from "./useSwitchLocale";

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${FONT_SIZE_DEFAULT};
  margin-right: 1.5rem;
  opacity: 1;
  pointer-events: auto;
  position: relative;
  transform: translateX(0);
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
  will-change: opacity;

  @media screen and (max-width: ${BREAKPOINT_MOBILE}) {
    opacity: 0;
    pointer-events: none;
    transform: translateX(5rem);
  }
`;

const List = styled.ul`
  display: flex;
  font-size: ${FONT_SIZE_DEFAULT};
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding-left: 0;
  flex-direction: row;
`;

const ListItem = styled.li`
  display: inline;
  margin-left: 1em;

  @media screen and (max-width: ${BREAKPOINT_MOBILE}) {
    display: none;
  }
`;

type NavigationProps = {
  openForm(): void;
};

const Navigation = ({ openForm }: NavigationProps) => {
  const { t } = useTranslation();
  const switchLocale = useSwitchLocale();

  return (
    <StyledNavigation>
      <List>
        {navigationLinks.map((link) => (
          <ListItem key={link.url}>
            <Link url={link.url}>{link.text}</Link>
          </ListItem>
        ))}
        <ListItem>
          <LinkButton onClick={openForm}>{t("navigation.contact")}</LinkButton>
        </ListItem>
        <ListItem>
          <LinkButton onClick={switchLocale}>
            {t("navigation.switchLanguage")}
          </LinkButton>
        </ListItem>
      </List>
    </StyledNavigation>
  );
};

export default Navigation;
