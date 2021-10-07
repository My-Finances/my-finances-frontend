import React from "react";
import { useSelector } from "react-redux";
import { Container } from "./styles";
const AuthThemes = ({ children }: any) => {
  return <Container>{children}</Container>;
};

export default AuthThemes;
