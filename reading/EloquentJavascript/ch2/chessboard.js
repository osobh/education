var size = 20;
var chessBoard = "";
for (i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    if ((i + j) % 2 === 0){
      chessBoard += "#";
    }
    else{
      chessBoard += " ";
    }
  }
  chessBoard += "\n";
}

console.log(chessBoard);