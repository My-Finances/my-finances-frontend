import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
const light = {
  palette: {
    type: "light",
    primary: "#4b0082",
    secondary: "#008080",
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Maven Pro', sans-serif",
    h1: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h3: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h4: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h5: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
  },
};

const dark = {
  palette: {
    type: "dark",
    primary: { 500: "#4e6aff" },
    secondary: "#028080",
    background: {
      default: "#1a1a1a",
    },
  },
  typography: {
    fontFamily: "'Maven Pro', sans-serif",
    h1: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h3: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h4: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h5: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "'Maven Pro', sans-serif",
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
  },
};

const ThemeDefault = ({ children }: any) => {
  const { themeDefault } = useSelector((state: any) => state.root);
  const defaultTheme = themeDefault ? light : dark;

  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export const Theme = (Component: any) => (props: any) => {
  return (
    <ThemeDefault>
      <Component {...props} />
    </ThemeDefault>
  );
};
