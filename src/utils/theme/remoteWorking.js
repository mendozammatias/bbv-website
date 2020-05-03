import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    common: {
      white: '#FFF',
      black: '#000',
    },
    primary: {
      light: '#B9EEE3',
      main: '#5CD2B9',
      dark: '#3CCFB0',
    },
    secondary: {
      main: '#112F41',
    },
    error: {
      light: '#E57373',
      main: '#D32F2F',
      dark: '#D32F2F',
      contrastText: '#FFF',
    },
    text: {
      primary: 'hsla(0,0%,0%,0.8)',
    },
    doveGray: '#666',
    tundora: '#424242',
  },
  typography: {
    color: '#202020',
    fontFamily: "'De La Fuente', sans-serif",
    h2: {
      fontSize: '3.5rem',
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
      lineHeight: 0,
    },
    subtitle2: {
      color: '#FFF',
    },
    title: {
      fontWeight: 400,
    },
  },
});

export default theme;
