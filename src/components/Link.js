import * as React from 'react';
import styled from 'styled-components';
import { LINK_BG, LINK_COLOR } from '../theme';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  background: ${LINK_BG};
  color: ${LINK_COLOR};
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${LINK_COLOR};
    outline: none;
    text-decoration: none;

    > span::after {
      width: 100%;
    }
  }
`;
const Text = styled.span`
  position: relative;

  &::after {
    border-bottom: 0.1em solid ${LINK_COLOR};
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    transition: width 0.2s ease;
    width: 0;
    will-change: width;
  }
`;

const Link = ({ url, text, onClick }) => (
  <StyledLink href={url} onClick={onClick}>
    <Text>{text}</Text>
  </StyledLink>
);

Link.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Link;
