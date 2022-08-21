import rgba from "./rgba";

export const WHITE = "#f5f5f5";
export const PRIMARY = "#040f3d";

export const THEME_COLOR = PRIMARY;
export const BACKGROUND_COLOR_1 = "#00b3ea";
export const BACKGROUND_COLOR_2 = "#1d3bac";
export const BACKGROUND_COLOR_3 = "#e0ffb4";
export const BACKGROUND_IMAGE = `linear-gradient(
  90deg,
  #00000000 10%,
  ${rgba(BACKGROUND_COLOR_3, 30)} 95%
), linear-gradient(
  180deg,
  ${BACKGROUND_COLOR_1} 10%,
  ${BACKGROUND_COLOR_2} 90%
)`;
export const BODY_COLOR = WHITE;

export const BORDER_COLOR = rgba(PRIMARY, 25);
export const BORDER_WIDTH = "2px";

export const LINK_BG = "transparent";
export const LINK_COLOR = PRIMARY;

export const FONT_FAMILY_SANS_SERIF = `'Poppins', -apple-system, 'BlinkMacSystemFont',
  'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif,
  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`;

export const FONT_SIZE_DEFAULT = "21px";
export const FONT_SIZE_TINY = "13px";
export const FONT_SIZE_SECONDARY = "14px";
export const FONT_SIZE_LARGE = "28px";
export const FONT_SIZE_DISPLAY = "105px";
export const FONT_SIZE_DISPLAY_MOBILE = "63px";

export const BREAKPOINT_MOBILE = "919px";
export const BREAKPOINT_TINY = "359px";
