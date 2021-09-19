import { css } from 'styled-components';

export const animFadeIn = css`
  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  animation: fade-in ease-in 1;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  opacity: 0;
  will-change: opacity;
`;

export const animFadeInAndCondense = css`
  @keyframes fade-in-and-condense {
    from {
      letter-spacing: 0.05em;
      opacity: 0;
    }

    to {
      letter-spacing: normal;
      opacity: 1;
    }
  }

  animation: fade-in-and-condense;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  opacity: 0;
  will-change: opacity, letter-spacing;
`;

export const ANIM_DELAY_1 = '0.1s';
export const ANIM_DELAY_2 = '0.2s';
export const ANIM_DELAY_3 = '0.3s';
export const ANIM_DELAY_4 = '0.4s';
