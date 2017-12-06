const Game = require("../src/chess/Game");

Game.init();

console.log(Game.board.getAsciiBoard());
console.log(Game.board.checkRow("B", 4, "B", 4));
