import React, { useEffect, useState } from "react";

// import ButtonTop from "~/components/ButtonTop";
import { Container, Content } from "./styles";

const DefaultThemes = ({ children }: any) => {
  const [positionTop, setPositionTop] = useState(0);

  useEffect(() => {
    window.onscroll = () => setPositionTop(window.pageYOffset);
  }, []);
  return (
    <>
      <Container>
        <Content> {children}</Content>
      </Container>
    </>
  );
};
export default DefaultThemes;
