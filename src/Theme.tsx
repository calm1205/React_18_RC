import React from 'react';
import {
  Theme,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// ===== Material UI =====
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
    space: number;
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    space?: number;
  }
}
const defaultTheme = createTheme({
  status: {
    danger: 'orange',
  },
  spacing: 8,
  space: 8,
  palette: {
    mode: 'light',
    primary: {
      main: '#61DAFB',
    },
  },
});

// ===== styled-components =====
declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}

interface Props {
  children: React.ReactNode;
  theme?: Theme;
}

export const ThemeProvider: React.FC<Props> = ({
  children,
  theme = defaultTheme,
}) => {
  return (
    <MUIThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </MUIThemeProvider>
  );
};
