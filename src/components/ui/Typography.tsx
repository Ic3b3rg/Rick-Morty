import styled, { createGlobalStyle } from "styled-components";

export const GlobalTypography = createGlobalStyle`
  @font-face {
    font-family: 'Playfair Display';
    src: url('/assets/fonts/playfair/PlayfairDisplay-Bold.woff2') format('woff2'),
         url('/assets/fonts/playfair/PlayfairDisplay-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/assets/fonts/opensans/OpenSans-Regular.woff2') format('woff2'),
         url('/assets/fonts/opensans/OpenSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

export const H1 = styled.h1`
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 29px;
  line-height: 40px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 52px;
  }
`;

export const H2 = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 22px;
  line-height: 40px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 52px;
  }
`;

export const P = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  margin: 0;
`;
