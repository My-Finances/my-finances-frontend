import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, DefaultTheme } from "styled-components";
const light: DefaultTheme = {
  palette: {
    type: "light",
    primary: "#5f77ff",
    secondary: "#008080",
    expenses: "#f44336",
    incomes: "#66bb6a",
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
    expenses: "#d32f2f",
    incomes: "#388e3c",
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
