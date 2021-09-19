import * as React from 'react';
import styled from 'styled-components';
import { animFadeIn } from '../../animations';
import { BREAKPOINT_MOBILE } from '../../theme';
import Navigation from './Navigation';
import PropTypes from 'prop-types';
import MobileNavigationToggle from './MobileNavigationToggle';

const StyledHeader = styled.div`
  ${animFadeIn};

  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin: 0 0 2rem 0;
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

const Header = ({ openForm, isMobileNavigationOpen, toggleMobileNavigation }) => (
  <StyledHeader>
    <Title>Tatu Arvela</Title>
    <Navigation openForm={openForm} />
    <MobileNavigationToggle isToggled={isMobileNavigationOpen} onClick={toggleMobileNavigation} />
  </StyledHeader>
);

Header.propTypes = {
  isMobileNavigationOpen: PropTypes.bool.isRequired,
  openForm: PropTypes.func.isRequired,
  toggleMobileNavigation: PropTypes.func.isRequired,
};

export default Header;
