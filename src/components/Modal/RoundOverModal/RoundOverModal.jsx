import React, { useContext } from 'react';
import { Title, Subtitle } from '../../../styles/General.styled';
import { ModalHeader, ModalBody, ModalFooter } from '../Modal.styled';
import Button from '../../Button/Button';
import { GameContext } from '../../../contexts/GameContext';
import { ModalContext } from '../../../contexts/ModalContext';

const RoundOverModal = () => {
  const { resetBoard, game} = useContext(GameContext)
  const { handleModal } = useContext(ModalContext)
  return (
    <>
    <ModalHeader><Title> {game.roundWinner.name} Wins Round</Title></ModalHeader>
    <ModalBody>
      <Subtitle>Choices will be switched now.</Subtitle>
      <Subtitle>{game.player1.name} : {game.player1.score}</Subtitle>
      <Subtitle>{game.player2.name} : {game.player2.score}</Subtitle>
    </ModalBody>
    <ModalFooter>
        <Button onClick={() => {
          handleModal();
          resetBoard()
        }}>Continue</Button>
        <Button>Restart</Button>
    </ModalFooter> 
    </>
  )
}

export default RoundOverModal
