import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#001f3f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#001f3f',
    },

    background: {
      default: '#F8F6F1',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#001f3f',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        sx: {
          borderRadius: 50,
          fontWeight: 700,

          paddingX: 4,
        },
      },
      styleOverrides: {
        root: {
          fontSize: 16,
          '@media(min-width: 900px)': {
            fontSize: 20,
          },
        },
      },
    },
  },
});
