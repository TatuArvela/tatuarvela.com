import * as React from 'react';
import styled from 'styled-components';
import { BREAKPOINT_MOBILE, FONT_SIZE_DEFAULT } from '../../theme';
import Link from '../Link';
import PropTypes from 'prop-types';
import links from '../../links';

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

const Navigation = ({ openForm }) => {
  return (
    <StyledNavigation>
      <List>
        {
          links.map((link) => (
          <ListItem key={link.url}>
            <Link url={link.url} text={link.text} />
          </ListItem>))
        }
        <ListItem>
          <Link onClick={openForm} text="Contact" />
        </ListItem>
      </List>
    </StyledNavigation>
  );
}

Navigation.propTypes = {
  openForm: PropTypes.func.isRequired,
}

export default Navigation;
