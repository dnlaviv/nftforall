import { DefaultTheme } from 'styled-components';
import { baseTheme } from './base.theme';
import { DeepPartial } from 'redux';

export const themeDark: DeepPartial<DefaultTheme> = {
  ...baseTheme,
  background: '#000000',
  footerBackground: '#0D0D0D',
  color: {
    primary: '#ffffff',
    secondary: '#7F8699',
    secondary2: '#CBCED5',
  },
  bgColor: {
    primary: (opacity = '1') => `rgba(86, 63, 227, ${opacity})`,
    secondary: (opacity = '1') => `rgba(23, 23, 23, ${opacity})`,
    secondary2: '#080808',
  },
  overlay: {
    primary: 'rgba(255, 255, 255, .55)',
  },
};
