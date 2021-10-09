import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, DefaultTheme } from "styled-components";
const light: DefaultTheme = {
  palette: {
    type: "light",
    primary: "#4b0082",
    secondary: "#008080",
    background: {
      default: "#ffffff",
      paper: "#f5f6fc",
    },
  },
  typography: {
    color: "#000000",
  },
};

const dark: DefaultTheme = {
  palette: {
    type: "dark",
    primary: "#4e6aff",
    secondary: "#028080",
    background: {
      default: "#202020",
      paper: "#333333",
    },
  },
  typography: {
    color: "#ffffff",
  },
};

const ThemeDefault = ({ children }: any) => {
  const { themeDefault } = useSelector((state: any) => state.root);
  const defaultTheme = !themeDefault ? light : dark;

  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export const Theme = (Component: any) => (props: any) => {
  return (
    <ThemeDefault>
      <Component {...props} />
    </ThemeDefault>
  );
};
