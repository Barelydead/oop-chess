const Game = require("../src/chess/Game");

Game.init();

console.log(Game.status());
Game.movePiece("B", 1, "C", 1)
console.log(Game.board.getAsciiBoard())

Game.movePiece("G", 1, "F", 1)
console.log(Game.board.getAsciiBoard())

Game.movePiece("A", 2, "C", 3)
console.log(Game.board.getAsciiBoard())
