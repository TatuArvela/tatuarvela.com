import styled from "styled-components";
import { LINK_COLOR } from "styles/themeVariables";

const LinkText = styled.span`
  position: relative;

  &::after {
    border-bottom: 0.1em solid ${LINK_COLOR};
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    position: absolute;
    transition: width 0.2s ease;
    width: 0;
    will-change: width;
  }
`;

export default LinkText;
