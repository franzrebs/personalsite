import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.666,
  scaleRatio: 1.8,
  googleFonts: [
    {
      name: 'EB Garamond',
      styles: ['400', '500', '600'],
    },
  ],
  headerFontFamily: ['EB Garamond', 'serif'],
  bodyFontFamily: ['EB Garamond', 'serif'],
  includeNormalize: true,
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    time: {
      color: `hsla(0, 0%, 0%, 0.5)`,
    },
  }),
});

export default typography;
