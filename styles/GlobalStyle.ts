import { createGlobalStyle } from "styled-components";

import {
  BACKGROUND_IMAGE,
  BODY_COLOR,
  BREAKPOINT_MOBILE,
  FONT_FAMILY_SANS_SERIF,
  FONT_SIZE_DEFAULT,
  FONT_SIZE_DISPLAY,
  FONT_SIZE_DISPLAY_MOBILE,
  FONT_SIZE_LARGE,
  THEME_COLOR,
} from "./themeVariables";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${THEME_COLOR};
    background-image: ${BACKGROUND_IMAGE};
    background-repeat: no-repeat;
    overflow-x: hidden; // Weird Firefox issue
    font-size: ${FONT_SIZE_DEFAULT};
  }

  body {
    color: ${BODY_COLOR};
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    font-family: ${FONT_FAMILY_SANS_SERIF};
  }

  h1 {
    font-size: ${FONT_SIZE_DISPLAY};

    @media screen and (max-width: ${BREAKPOINT_MOBILE}) {
      font-size: ${FONT_SIZE_DISPLAY_MOBILE};
    }
  }

  h2 {
    font-size: ${FONT_SIZE_LARGE};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

export default GlobalStyle;
