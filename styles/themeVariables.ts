import rgba from "./rgba";

export const WHITE = "#f5f5f5";
export const PRIMARY = "#040f3d";

export const THEME_COLOR = PRIMARY;
export const BACKGROUND_COLOR_1 = "#3cb1d5";
export const BACKGROUND_IMAGE = `
  radial-gradient(ellipse at 30% 0%, #7ecde6 0%, transparent 50%),
  radial-gradient(ellipse at 80% 0%, #a8d8ea 0%, transparent 40%),
  radial-gradient(ellipse at 50% 100%, #1a0a3e 0%, transparent 70%),
  linear-gradient(
    180deg,
    #4fc3e0 0%,
    #2a6db5 30%,
    #1d3bac 55%,
    #140840 100%
  )
`;
export const BODY_COLOR = WHITE;

export const BORDER_COLOR = rgba(PRIMARY, 25);
export const BORDER_WIDTH = "2px";

export const LINK_BG = "transparent";
export const LINK_COLOR = PRIMARY;

export const FONT_FAMILY_SANS_SERIF = `'Urbanist', -apple-system, 'BlinkMacSystemFont',
  'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif,
  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`;

export const FONT_SIZE_DEFAULT = "21px";
export const FONT_SIZE_TINY = "13px";
export const FONT_SIZE_SECONDARY = "14px";
export const FONT_SIZE_LARGE = "28px";
export const FONT_SIZE_DISPLAY = "100px";
export const FONT_SIZE_DISPLAY_MOBILE = "70px";

export const BREAKPOINT_MOBILE = "919px";
export const BREAKPOINT_TINY = "359px";
