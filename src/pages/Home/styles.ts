import styled from "styled-components";

import { FiArrowUp, FiArrowDown, FiDollarSign } from "react-icons/all";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  position: relative;
`;

export const Title = styled.h1`
  color: #ffffff;
`;

export const Card = styled.div<{
  isNegativeValue: boolean | null
}>`
  background: ${({ theme, isNegativeValue }) =>
    isNegativeValue === null
      ? theme.palette.background.paper
      : isNegativeValue
      ? theme.palette.expenses
      : theme.palette.incomes};

  border-radius: 0.5rem;
  color: ${({ theme, isNegativeValue }) =>
    isNegativeValue !== null ? "#ffffff" : theme.typography.color};
  padding: 2.5rem;
  position: relative;
  span {
    display: block;
  }
  svg {
    position: absolute;
    font-size: 2.5rem;
    right: 2.5rem;
    top: 2.5rem;
  }
`;

export const TitleCard = styled.span`
  font-size: 1.3rem;
  margin-bottom: 3rem;
`;
export const ValueCard = styled.span`
  font-size: 2rem;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 12rem;
  column-gap: 2rem;
  row-gap: 2rem;
  grid-template-columns: 30rem 30rem 30rem;
`;
export const PuperContainer = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.palette.primary};
  z-index: 1;
  width: 100%;
  min-height: 17rem;
  top: 0;
  left: 0;
`;

export const IconUp = styled(FiArrowUp)`
  color: ${({ theme }) => theme.palette.incomes};
`;

export const IconDown = styled(FiArrowDown)`
  color: ${({ theme }) => theme.palette.expenses};
`;

export const IconDollar = styled(FiDollarSign)`
  color: #ffffff;
`;
