import { css } from "styled-components";

import {
  BACKGROUND_COLOR_1,
  BORDER_COLOR,
  BORDER_WIDTH,
  FONT_FAMILY_SANS_SERIF,
  FONT_SIZE_SECONDARY,
  PRIMARY,
} from "./themeVariables";

export const inputStyle = css`
  background-clip: padding-box;
  background-color: transparent;
  border-radius: 0;
  border: ${BORDER_WIDTH} solid ${BORDER_COLOR};
  color: ${PRIMARY};
  display: block;
  font-family: ${FONT_FAMILY_SANS_SERIF};
  font-size: ${FONT_SIZE_SECONDARY};
  height: auto;
  line-height: 1.5;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  resize: none;
  transition: border 0.2s;

  &:focus {
    border: ${BORDER_WIDTH} solid ${BACKGROUND_COLOR_1};
    outline: none;
  }
`;
