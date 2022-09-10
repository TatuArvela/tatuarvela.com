import { ReactNode } from "react";
import styled from "styled-components";
import {
  FONT_FAMILY_SANS_SERIF,
  LINK_BG,
  LINK_COLOR,
} from "styles/themeVariables";

import LinkText from "./LinkText";

const StyledLinkButton = styled.button`
  background: ${LINK_BG};
  border: none;
  color: ${LINK_COLOR};
  display: inline-block;
  font-size: inherit;
  font-family: ${FONT_FAMILY_SANS_SERIF};
  text-decoration: none;
  text-transform: uppercase;
  height: 100%;
  padding: 0;
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
