import { createTheme } from '@mui/material/styles';
import { pink, blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: '#5c67a3',
      main: blue['700'],
      dark: '#2e355b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff79b0',
      main: '#ff4081',
      dark: '#c60055',
      contrastText: '#000',
    },
    openTitle: blue['700'],
    protectedTitle: pink['400'],
  },
});

export default theme;
