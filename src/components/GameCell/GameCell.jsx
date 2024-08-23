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
import { SfxContext } from "../../contexts/SfxContext";

const GameCell = ({ cellItem, index, isWinningCell }) => {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const { hoverSfx, clickedSfx, winnerSfx } =
    useContext(SfxContext);

  const cellClickHandler = () => {
    clickedSfx();
    updateBoard(index);
    const result = checkForWinner(game.board);
    console.log(result);
    if (result) {
      roundComplete(result);
      if (result !== "draw") {
        winnerSfx();
      }
      setTimeout(() => {
        handleModal(<RoundOverModal />);
      }, 2000);
    }
  };

  if (cellItem === "x") {
    return (
      <CellStyle isWinningCell={isWinningCell ?? false}>
        <IconX className="markedItem" />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle isWinningCell={isWinningCell ?? false}>
        <IconO className="markedItem" />
      </CellStyle>
    );
  }
  return (
    <CellStyle onClick={cellClickHandler} onMouseEnter={() => hoverSfx()}>
      {game.turn === "x" ? (
        <XIconOutline className="outlineIcon" />
      ) : (
        <OIconOutline className="outlineIcon" />
      )}
    </CellStyle>
  );
};

export default GameCell;
