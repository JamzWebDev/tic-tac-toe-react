import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svgs/filled x.svg";
import { ReactComponent as XIconOutline } from "../../assets/svgs/outline x.svg";
import { ReactComponent as IconO } from "../../assets/svgs/filled o.svg";
import { ReactComponent as OIconOutline } from "../../assets/svgs/outline o.svg";
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext)

  const cellClickHandler = () => {
    updateBoard(index);
    const result = checkForWinner(game.board)
    if(result) {
      roundComplete(result)
      handleModal(<RoundOverModal />)
    };
  };

  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX className="markedItem"/>
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO className="markedItem"/>
      </CellStyle>
    );
  }
  return (
    <CellStyle onClick={cellClickHandler}>
      {game.turn === "x" ? <XIconOutline className="outlineIcon" /> : <OIconOutline className="outlineIcon" />}
    </CellStyle>
  );
};

export default GameCell;
