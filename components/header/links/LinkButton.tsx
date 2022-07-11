import { ReactNode } from "react";
import styled from "styled-components";
import { LINK_BG, LINK_COLOR } from "styles/themeVariables";

import LinkText from "./LinkText";

const StyledLinkButton = styled.div`
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

type LinkButtonProps = {
  children: ReactNode;
  onClick(): void;
};

const LinkButton = ({ children, onClick }: LinkButtonProps) => (
  <StyledLinkButton onClick={onClick}>
    <LinkText>{children}</LinkText>
  </StyledLinkButton>
);

export default LinkButton;
