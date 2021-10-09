import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1``;

export const Card = styled.div`
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.typography.color};
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 8rem;
  column-gap: 2rem;
  row-gap: 2rem;
  grid-template-columns: 30rem 30rem 30rem;
`;
