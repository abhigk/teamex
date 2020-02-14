import styled, { css } from "styled-components";
export const theme = { Primary: { main: "#5567dd" } };
export const mediaSizes = {
  phone: 576.98,
  tablet: 767.98,
  desktop: 991.98,
  largeDesktop: 1200.98
};
export const mediaMax = Object.keys(mediaSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${mediaSizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
export const mediaMin = Object.keys(mediaSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${mediaSizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const fade = (hex, opacity) => {
  hex = hex.replace("#", "");
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  return "rgba(" + r + "," + g + "," + b + "," + opacity + ")";
};
export const LightenDarkenColor = (col, amt) => {
  let usePound = false;
  if (col && col.length > 0 && col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }
  let num = parseInt(col, 16);
  let r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  let b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  let g = (num & 0x0000ff) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};
