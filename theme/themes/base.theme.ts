import { DeepPartial } from 'redux';
import { DefaultTheme } from 'styled-components';

export const baseTheme: DeepPartial<DefaultTheme> = {
  fontSize: {
    primary: '1rem',
    lg: '1.6rem',
    md: '1.2rem',
    sm: '0.875rem',
    xs: '0.7rem',
  },
  buttonPadding: {
    sm: '0.65rem 0.9rem',
    primary: '1rem 2rem',
  },
  borderRadius: {
    primary: '0.6rem',
    rounded: '100%',
  },
  transition: {
    primary: 'all ease-in-out 0.1s',
    fast: 'all ease-in-out 0.06s',
  },
  measurements: {
    navbarHeight: '6rem',
    footerHeight: '3.5rem',
  },
  breakpoints: {
    xs: '575.98px',
    sm: '767.98px',
    md: '991.98px',
    lg: '1199.98px',
    xl: '1399.98px',
  },
  gradient: {
    radial: {
      primary: (location = '50% 50%', opacity = '0.25') =>
        `radial-gradient(80% 50% at ${location}, rgba(235, 100, 94, ${opacity}) 0%, transparent)`,
      secondary: (location = '50% 50%', opacity = '0.25') =>
        `radial-gradient(80% 50% at ${location}, rgba(86,63,227, ${opacity}) 0%, transparent)`,
    },
    linear: {
      primary: 'linear-gradient(-90deg, #47BA74 0%, #B8F170 100%)',
      success: 'linear-gradient(-90deg, #7837DA 0%, #C65686 100%)',
    },
  },
  elevation: {
    primary: '0px 2px 10px rgba(0, 0, 0, 0.03)',
    secondary: '0px 2px 10px rgba(0, 0, 0, 0.15)',
  },
};
