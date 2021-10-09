import styled from "styled-components";
export const Container = styled.div`
  flex-grow: 1;
  transition: ease-in-out width 0.3s;
  background: ${({ theme }) => theme.palette.background.default};
  min-height: 100vh;
`;
export const Content = styled.div`
  padding: 40px 15px;
  min-height: 55vh;
`;
