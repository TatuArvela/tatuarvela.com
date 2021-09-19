import * as React from 'react';
import styled, { css } from 'styled-components';
import { BREAKPOINT_MOBILE, FONT_SIZE_DEFAULT, PRIMARY } from '../theme';
import links from '../links';
import Link from './Link';
import PropTypes from 'prop-types';
import rgba from '../rgba';

const toggledStyle = css`
  height: calc((1.25rem * 2) * 4);
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
  pointer-events: ${(props) => props.isOpen ? 'auto' : 'none'};
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

const MobileNavigation = ({ openForm, isOpen }) => {
  return (<StyledMobileNavigation isOpen={isOpen}>
    <List isOpen={isOpen}>
      {
        links.map((link) => (
          <ListItem key={link.url}>
            <Link url={link.url} text={link.text} />
          </ListItem>))
      }
      <ListItem>
        <Link onClick={openForm} text='Contact' />
      </ListItem>
    </List>
  </StyledMobileNavigation>);
};

MobileNavigation.propTypes = {
  openForm: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default MobileNavigation;
