import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    footerBackground: string;
    buttonPadding: {
      sm: string;
      primary: string;
    };
    fontSize: {
      primary: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
    transition: {
      primary: string;
      fast: string;
    };
    color: {
      primary: string;
      secondary: string;
      secondary2: string;
      warning: string;
      danger: string;
      surface: function;
      transparent: 'transparent';
    };
    bgColor: {
      primary: function;
      secondary: function;
      secondary2: string;
      warning: function;
      danger: function;
    };
    overlay: {
      primary: string;
      secondary: string;
      warning: string;
      danger: string;
    };
    gradient: {
      radial: {
        primary: string | function;
        secondary: string | function;
        warning: string | function;
        danger: string | function;
        success: string | function;
      };
      linear: {
        primary: string;
        secondary: string;
        warning: string;
        danger: string;
        success: string | function;
      };
    };
    elevation: {
      primary: string;
      secondary: string;
      warning: string;
      danger: string;
    };
    iconSize: {
      primary: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      primary: string;
      rounded: '100%';
    };
    measurements: {
      navbarHeight: string;
      footerHeight: string;
    };
  }
}
