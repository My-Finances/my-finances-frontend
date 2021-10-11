import React from "react";

import { formatPrice } from "~/utils";

import {
  Container,
  Title,
  Card,
  CardContainer,
  PuperContainer,
  TitleCard,
  ValueCard,
  IconDollar,
  IconDown,
  IconUp,
} from "./styles";

const Home: React.FC = () => {
  const cards = [
    { title: "Entradas", value: formatPrice(15000), icon: <IconUp /> },
    { title: "Saidas", value: "- " + formatPrice(500), icon: <IconDown /> },
    {
      title: "Total",
      value: formatPrice(14000),
      isNegativeValue: isNegativeValue(14000),
      icon: <IconDollar />,
    },
  ];

  function isNegativeValue(value: number) {
    return value < 0;
  }

  const renderCards = () => {
    return (
      <CardContainer>
        {cards.map(({ value, title, icon, isNegativeValue = null }, index) => (
          <Card key={index} isNegativeValue={isNegativeValue}>
            <TitleCard>{title}</TitleCard>
            <ValueCard>{value}</ValueCard>
            {icon}
          </Card>
        ))}
      </CardContainer>
    );
  };
  return (
    <>
      <PuperContainer />
      <Container>
        <Title>My Finances</Title>
        {renderCards()}
      </Container>
    </>
  );
};

export default Home;
