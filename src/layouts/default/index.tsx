import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeTheme } from "~/store/modules/root/actions";

// import ButtonTop from "~/components/ButtonTop";
import { Container, Content, ToggleThemeButton } from "./styles";

const DefaultThemes = ({ children }: any) => {
  const dispatch = useDispatch();
  const [positionTop, setPositionTop] = useState(0);
  const { themeDefault } = useSelector((state: any) => state?.root);

  useEffect(() => {
    window.onscroll = () => setPositionTop(window.pageYOffset);
  }, []);

  const handleChangeTheme = () => {
    dispatch(changeTheme(!themeDefault));
  };
  return (
    <>
      <Container>
        <ToggleThemeButton onClick={handleChangeTheme}>
          {themeDefault ? "Ativar modo escuro" : "Desativar modo escuro"}
        </ToggleThemeButton>
        <Content> {children}</Content>
      </Container>
    </>
  );
};
export default DefaultThemes;
