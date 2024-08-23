import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { SfxContext } from "../../../contexts/SfxContext";
import { useNavigate } from "react-router";

const RoundOverModal = () => {
  const { resetBoard, game, restartGame } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const { hoverSfx, clickedSfx, completedSfx } = useContext(SfxContext);

  const navigate = useNavigate();

  return (
    <>
      <ModalHeader>
        <Title>
          {game.roundWinner
            ? `${game.roundWinner.name} Wins Round`
            : "Round Drawn"}
        </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle>Choices will be switched now.</Subtitle>
        <Subtitle>
          {game.player1.name} : {game.player1.score}
        </Subtitle>
        <Subtitle>
          {game.player2.name} : {game.player2.score}
        </Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            clickedSfx();
            handleModal();
            resetBoard();
          }}
          onMouseEnter={() => hoverSfx()}
        >
          Continue
        </Button>
        <Button
          onClick={() => {
            completedSfx();
            restartGame();
            handleModal();
            navigate("/");
          }}
          onMouseEnter={() => hoverSfx()}
        >
          Restart
        </Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
