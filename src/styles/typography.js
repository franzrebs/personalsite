import Typography from 'typography';
const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.666,
  scaleRatio: 1.8,
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Roboto', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'Helvetica', 'sans-serif'],
  includeNormalize: true,
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    time: {
      color: `hsla(0, 0%, 0%, 0.5)`,
    },
  }),
});
export default typography;
