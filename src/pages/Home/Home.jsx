import React from "react";
import { Container, Subtitle, Title } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <Subtitle>Play With Your Friends, Highest Score Wins!</Subtitle>
      <Button onClick={() => navigate("/game-on")}>Play Now</Button>
    </Container>
  );
};

export default Home;
