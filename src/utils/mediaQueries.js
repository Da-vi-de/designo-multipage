const BREAKPOINTS = {
    md: 790,
    lg: 1200,
    xl: 1500,
  };

  export const QUERIES = {
      tabletMini: `(min-width: ${BREAKPOINTS.md / 16}rem)`,
      desktop: `(min-width: ${BREAKPOINTS.lg / 16}rem)`,
      megaDesktop: `(min-width: ${BREAKPOINTS.xl / 16}rem)`,
  };