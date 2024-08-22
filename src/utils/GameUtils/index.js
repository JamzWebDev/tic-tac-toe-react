const checkForSequence = (option1, option2, option3) => {
  if(option1 === null || option2 === null || option3 === null) {
    return false;
  }
  return option1 === option2 && option2 === option3;
};

export const checkForWinner = (board) => {
  //0 1 2
  //3 4 5
  //6 7 8

  // row/column winner checks

  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
      console.log("we have a row winner");
      return true;
    }
  }

  for (let i = 0; i < 3; i += 1) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
      console.log("we have a column winner");
      return true;
    }
  }

  //diagonal winner checks
  //diagonal 1
  if(checkForSequence(board[0], board[4], board[8])) {
    console.log("Diagonal Winner Found");
    return true;
  }

  //diagonal 2
  if(checkForSequence(board[2], board[4], board[6])) {
    console.log("Diagonal Winner Found");
    return true;
  }

  //check for draw 
  console.log(board)
  if(!board.includes(null)) {
    return "draw"
  }

  return false;
};







//manual row checks

// // horizontal 1
// if(board[0] === board[1] && board[1] === board[2]) {
//     console.log("Row Winner Found")
//     return true
// }

// // horizontal 2
// if(board[3] === board[4] && board[4] === board[5]) {
//     console.log("Row Winner Found")
//     return true
// }

// // horizontal 3
// if(board[6] === board[7] && board[7] === board[8]) {
//     console.log("Row Winner Found")
//     return true
// }

// // vertical 1
// if(board[0] === board[3] && board[3] === board[6]) {
//     console.log("Row Winner Found")
//     return true
// }

// // vertical 2
// if(board[1] === board[4] && board[4] === board[7]) {
//     console.log("Row Winner Found")
//     return true
// }

// // vertical 3
// if(board[2] === board[5] && board[5] === board[8]) {
//     console.log("Row Winner Found")
//     return true
// }
