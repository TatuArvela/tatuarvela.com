import { useTranslation } from "i18n";
import { useEffect, useState } from "react";
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

const transitionDuration = 400;

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
  margin: 1.5rem -3.5rem;
  opacity: 0;
  overflow: visible;
  position: relative;
  pointer-events: none;
  transition: opacity ${transitionDuration}ms ease-out,
    height ${transitionDuration}ms ease-out,
    padding ${transitionDuration}ms ease-out;
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
`;

const ListItem = styled.li`
  align-self: flex-end;
  display: none;
  flex-grow: 1;
  height: 2.5rem;
  margin: 0 4rem;

  @media screen and (max-width: ${BREAKPOINT_MOBILE}) {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
  }
`;

type Props = {
  openForm(): void;
  isOpen: boolean;
};

const MobileNavigation = ({ openForm, isOpen }: Props) => {
  const { t } = useTranslation();
  const switchLocale = useSwitchLocale();
  // Hide links from DOM when the navigation is collapsed
  const [renderLinks, setRenderLinks] = useState<boolean>(false);
  useEffect(() => {
    let timeout;
    if (isOpen) {
      setRenderLinks(true);
    }
    if (!isOpen && renderLinks) {
      timeout = setTimeout(() => setRenderLinks(false), transitionDuration);
    }
  }, [isOpen, renderLinks]);

  return (
    <StyledMobileNavigation isOpen={isOpen}>
      {renderLinks && (
        <List>
          {navigationLinks.map((link) => (
            <ListItem key={link.url}>
              <Link url={link.url}>{link.text}</Link>
            </ListItem>
          ))}
          <ListItem>
            <LinkButton onClick={openForm}>
              {t("navigation.contact")}
            </LinkButton>
          </ListItem>
          <ListItem>
            <LinkButton onClick={switchLocale}>
              {t("navigation.switchLanguage")}
            </LinkButton>
          </ListItem>
        </List>
      )}
    </StyledMobileNavigation>
  );
};

export default MobileNavigation;
