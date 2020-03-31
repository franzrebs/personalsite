const generateMinWidthQuery = bp => `@media (min-width: ${bp}px)`;
export const breakpoints = {
  sm: generateMinWidthQuery(576),
  md: generateMinWidthQuery(768),
  lg: generateMinWidthQuery(992),
  xl: generateMinWidthQuery(1200),
};
