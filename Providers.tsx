import React from 'react';
import { GlobalStyles } from './theme/GlobalStyles';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { useThemeToggle } from './features/theme/hooks/useThemeToggle';
import { ThemeMode } from './features/theme/theme.slice';
import { themeDark } from './theme/themes/dark.theme';
import { themeLight } from './theme/themes/light.theme';

function getLibrary(provider: any) {
  return new Web3Provider(provider);
}

export const Providers: React.FC = ({ children }) => {
  const { mode } = useThemeToggle();
  const theme = mode === ThemeMode.DARK ? themeDark : themeLight;
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <GlobalStyles />
      <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
    </ThemeProvider>
  );
};
