import { useTranslation } from "i18n";
import styled, { css } from "styled-components";
import rgba from "styles/rgba";
import {
  BREAKPOINT_MOBILE,
  FONT_SIZE_DEFAULT,
  PRIMARY,
} from "styles/themeVariables";

import Link from "./links/Link";
import LinkButton from "./links/LinkButton";
import navigationLinks from "./navigationLinks";
import useSwitchLocale from "./useSwitchLocale";

const toggledStyle = css`
  height: calc((1.25rem * 2) * 5);
  padding: 1.25rem 0;
  pointer-events: auto;
  opacity: 1;
`;

const StyledMobileNavigation = styled.div`
  box-shadow: inset 0 0 10px ${rgba(PRIMARY, 25)};
  display: flex;
  flex-direction: column;
  height: 0;
  margin: 0 -3.5rem;
  opacity: 0;
  overflow: visible;
  position: relative;
  pointer-events: none;
  transition: opacity 0.4s ease-out, height 0.4s ease-out, padding 0.4s ease-out;
  will-change: opacity, height, padding;

  @media screen and (max-width: ${BREAKPOINT_MOBILE}) {
    ${({ isOpen }) => isOpen && toggledStyle}
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: ${FONT_SIZE_DEFAULT};
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding-left: 0;
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
`;

const ListItem = styled.li`
  align-self: flex-end;
  display: none;
  flex-grow: 1;
  line-height: 0;
  margin: 0 2rem;
  padding: 1.25rem 2rem;

  @media screen and (max-width: ${BREAKPOINT_MOBILE}) {
    display: block;
  }
`;

type Props = {
  openForm(): void;
  isOpen: boolean;
};

const MobileNavigation = ({ openForm, isOpen }: Props) => {
  const { t } = useTranslation();
  const switchLocale = useSwitchLocale();

  return (
    <StyledMobileNavigation isOpen={isOpen}>
      <List isOpen={isOpen}>
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
    </StyledMobileNavigation>
  );
};

export default MobileNavigation;
