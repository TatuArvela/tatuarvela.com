import { css, keyframes } from "styled-components";

// Shared easing curves
export const EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)";
export const EASE_IN = "cubic-bezier(0.7, 0, 0.84, 0)";
export const EASE_EMPHASIZED = "cubic-bezier(0.2, 0, 0, 1)";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const animFadeIn = css`
  animation: ${fadeIn} ${EASE_OUT} 0.4s 1 forwards;
  opacity: 0;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;

const fadeInAndCondense = keyframes`
  from {
    letter-spacing: 0.05em;
    opacity: 0;
    transform: translateY(6px);
  }

  to {
    letter-spacing: normal;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const animFadeInAndCondense = css`
  animation: ${fadeInAndCondense} ${EASE_OUT} 0.8s forwards;
  opacity: 0;
  will-change: opacity, letter-spacing, transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;

export const ANIM_DELAY_1 = "0.1s";
export const ANIM_DELAY_2 = "0.2s";
export const ANIM_DELAY_3 = "0.3s";
export const ANIM_DELAY_4 = "0.4s";
