import { DefaultTheme } from 'styled-components';
import { baseTheme } from './base.theme';
import { DeepPartial } from 'redux';

export const themeLight: DeepPartial<DefaultTheme> = {
  ...baseTheme,
  background: '#ffffff',
  footerBackground: '#031137',
  color: {
    primary: '#000000',
    secondary: '#7F8699',
    secondary2: '#CBCED5',
  },
  bgColor: {
    primary: (opacity = '1') => `rgba(86, 63, 227, ${opacity})`,
    secondary: (opacity = '1') => `rgba(255, 255, 255, ${opacity})`,
    secondary2: '#F4F2FF',
  },
  overlay: {
    primary: 'rgba(255, 255, 255, .55)',
  },
};
