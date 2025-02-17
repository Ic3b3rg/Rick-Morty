import styled from "styled-components";

//TODO: can be a variable css
const breakpoints = {
  mobile: "360px",
  tabletPortrait: "768px",
  tabletLandscape: "1024px",
  desktopMedium: "1280px",
  desktopLarge: "1440px",
  desktopXLarge: "1920px",
};

const gridConfig = {
  mobile: {
    columns: 4,
    margin: "20px",
    gutter: "20px",
    columnWidth: "65px",
    minWidth: "320px",
  },
  tabletPortrait: {
    columns: 8,
    margin: "32px",
    gutter: "24px",
    columnWidth: "76px",
    minWidth: "704px",
  },
  tabletLandscape: {
    columns: 12,
    margin: "44px",
    gutter: "24px",
    columnWidth: "56px",
    minWidth: "936px",
  },
  desktopMedium: {
    columns: 12,
    margin: "42px",
    gutter: "28px",
    columnWidth: "74px",
    minWidth: "1196px",
  },
  desktopLarge: {
    columns: 12,
    margin: "76px",
    gutter: "32px",
    columnWidth: "78px",
    minWidth: "1288px",
  },
  desktopXLarge: {
    columns: 12,
    margin: "88px",
    gutter: "32px",
    columnWidth: "116px",
    minWidth: "1744px",
  },
};

const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${gridConfig.mobile.margin};
  max-width: 100%;
  box-sizing: border-box;
  @media (min-width: ${breakpoints.tabletPortrait}) {
    padding: 0 ${gridConfig.tabletPortrait.margin};
    max-width: ${gridConfig.tabletPortrait.minWidth};
  }

  @media (min-width: ${breakpoints.tabletLandscape}) {
    padding: 0 ${gridConfig.tabletLandscape.margin};
    max-width: ${gridConfig.tabletLandscape.minWidth};
  }

  @media (min-width: ${breakpoints.desktopMedium}) {
    padding: 0 ${gridConfig.desktopMedium.margin};
    max-width: ${gridConfig.desktopMedium.minWidth};
  }

  @media (min-width: ${breakpoints.desktopLarge}) {
    padding: 0 ${gridConfig.desktopLarge.margin};
    max-width: ${gridConfig.desktopLarge.minWidth};
  }

  @media (min-width: ${breakpoints.desktopXLarge}) {
    padding: 0 ${gridConfig.desktopXLarge.margin};
    max-width: ${gridConfig.desktopXLarge.minWidth};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${gridConfig.mobile.columns}, 1fr);
  gap: ${gridConfig.mobile.gutter};
  width: 100%;

  @media (min-width: ${breakpoints.tabletPortrait}) {
    grid-template-columns: repeat(${gridConfig.tabletPortrait.columns}, 1fr);
    gap: ${gridConfig.tabletPortrait.gutter};
  }

  @media (min-width: ${breakpoints.tabletLandscape}) {
    grid-template-columns: repeat(${gridConfig.tabletLandscape.columns}, 1fr);
    gap: ${gridConfig.tabletLandscape.gutter};
  }

  @media (min-width: ${breakpoints.desktopMedium}) {
    grid-template-columns: repeat(${gridConfig.desktopMedium.columns}, 1fr);
    gap: ${gridConfig.desktopMedium.gutter};
  }

  @media (min-width: ${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(${gridConfig.desktopLarge.columns}, 1fr);
    gap: ${gridConfig.desktopLarge.gutter};
  }

  @media (min-width: ${breakpoints.desktopXLarge}) {
    grid-template-columns: repeat(${gridConfig.desktopXLarge.columns}, 1fr);
    gap: ${gridConfig.desktopXLarge.gutter};
  }
`;

const GridItem = styled.div<{ span?: number }>`
  grid-column: span ${(props) => props.span || 1};
`;

export { Container, Grid, GridItem };
