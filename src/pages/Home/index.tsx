import React from "react";

import { Container, Title, Card, CardContainer } from "./styles";

const Home: React.FC = () => {
  const cards = [
    { title: "Card 1", description: "Teste sdfsdf" },
    { title: "Card 2", description: "Teste sdfsdf" },
    { title: "Card 3", description: "Teste sdfsdf" },
  ];
  const renderCards = () => {
    return (
      <CardContainer>
        {cards.map(({ description, title }, index) => (
          <Card key={index}>
            {title}
            {description}
          </Card>
        ))}
      </CardContainer>
    );
  };
  return (
    <Container>
      <Title>asdasd</Title>
      {renderCards()}
    </Container>
  );
};

export default Home;
