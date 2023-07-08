import { useState } from "react";
import styled from "styled-components";
import { animFadeIn } from "styles/animations";
import { BREAKPOINT_MOBILE } from "styles/themeVariables";

import MobileNavigation from "./MobileNavigation";
import MobileNavigationToggle from "./MobileNavigationToggle";
import Navigation from "./Navigation";

const StyledHeader = styled.div`
  ${animFadeIn};
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`;

const Title = styled.h2`
  display: block;
  flex-grow: 1;
  line-height: 1.5;
  margin: 0;
  transform: translateX(1.5rem);
  transition: transform 0.4s ease-out;

  @media screen and (max-width: ${BREAKPOINT_MOBILE}) {
    margin-left: 0;
    transform: translateX(0);
  }
`;

type HeaderProps = {
  openForm(): void;
};

const Header = ({ openForm }: HeaderProps) => {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
  const toggleMobileNavigation = () =>
    setIsMobileNavigationOpen((isOpen) => !isOpen);

  return (
    <>
      <StyledHeader>
        <Title>Tatu Arvela</Title>
        <Navigation openForm={openForm} />
        <MobileNavigationToggle
          isToggled={isMobileNavigationOpen}
          onClick={toggleMobileNavigation}
        />
      </StyledHeader>
      <MobileNavigation isOpen={isMobileNavigationOpen} openForm={openForm} />
    </>
  );
};

export default Header;
