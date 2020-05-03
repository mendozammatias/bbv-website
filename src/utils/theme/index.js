const { createMuiTheme } = require('@material-ui/core');

const typography = {
  fontFamily: 'Ubuntu, sans-serif',
  useNextVariants: true,
  title: {
    size: '2em',
    weight: 450,
  },
  subtitle: {
    size: '1.25em',
    weight: 400,
  },
  h4: {
    color: '#424242',
  },
  subtitle2: {
    color: '#FFF',
  },
  intro: {
    size: '3em',
    weight: 500,
  },
};

const colors = {
  primary: {
    light: '#B9EEE3',
    main: '#5CD2B9',
    dark: '#3CCFB0',
  },
  secondary: {
    main: '#112F41',
  },
  common: {
    white: '#FFF',
  },
  doveGray: '#666',
  tundora: '#424242',
};

const gradients = {
  // eslint-disable-next-line
  leftToRight: `linear-gradient(-45deg, 
  ${colors.primary.light} 0%, 
  ${colors.primary.main} 100%)`,
  // eslint-disable-next-line
  rightToLeft: `linear-gradient(45deg, 
  ${colors.primary.light} 0%, 
  ${colors.primary.main} 100%)`,
};

const palette = {
  ...colors,
  background: {
    primary: '#ffffff',
    alt: '#f7f7f7',
    dark: '#112F41',
  },
  text: {
    primary: '#666',
    dark: '#111',
    intro: '#f7f7f7',
  },
};

module.exports = createMuiTheme({
  gradients,
  typography,
  containers: {
    height: '600px',
  },
  palette,
  overrides: {
    MuiFormControl: {
      root: {
        minHeight: 90,
      },
    },
    MuiToggleButton: {
      root: {
        border: 'none',
        height: 32,
      },
      label: {
        color: colors.secondary.main,
        fontSize: 14,
      },
    },
  },
});
