import { ReactNode } from "react";
import styled from "styled-components";
import { LINK_BG, LINK_COLOR } from "styles/themeVariables";

import LinkText from "./LinkText";

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

type LinkProps = {
  url: string;
  children?: ReactNode;
};

const Link = ({ url, children }: LinkProps) => (
  <StyledLink href={url}>
    <LinkText>{children}</LinkText>
  </StyledLink>
);

export default Link;
