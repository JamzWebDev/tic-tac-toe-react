import React, { useContext } from "react";
import { Container, Subtitle, Title } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../contexts/SfxContext";

const Home = () => {
  const navigate = useNavigate();
  const { hoverSfx, clickedSfx } = useContext(SfxContext);
  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <Subtitle>Play With Your Friends, Highest Score Wins!</Subtitle>
      <Button
        onClick={() => {
          clickedSfx();
          navigate("/game-on");
        }}
        onMouseEnter={() => hoverSfx()}
      >
        Play Now
      </Button>
    </Container>
  );
};

export default Home;
