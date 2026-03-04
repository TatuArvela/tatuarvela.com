import { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const animFadeIn = css`
  animation: ${fadeIn} ease-in 1;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  opacity: 0;
  will-change: opacity;
`;

const fadeInAndCondense = keyframes`
  from {
    letter-spacing: 0.05em;
    opacity: 0;
  }

  to {
    letter-spacing: normal;
    opacity: 1;
  }
`;

export const animFadeInAndCondense = css`
  animation: ${fadeInAndCondense};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  opacity: 0;
  will-change: opacity, letter-spacing;
`;

export const ANIM_DELAY_1 = "0.1s";
export const ANIM_DELAY_2 = "0.2s";
export const ANIM_DELAY_3 = "0.3s";
export const ANIM_DELAY_4 = "0.4s";
