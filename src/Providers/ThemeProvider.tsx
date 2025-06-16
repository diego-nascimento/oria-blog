'use client';

import { theme } from '@/theme/theme';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={() => ({
            img: {
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              display: 'block',
            },

            ' a, a:hover, a:visited, a:active': {
              color: 'inherit',
              textDecoration: 'none',
            },
          })}
        />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
};
