[![Code Coverage](https://scrutinizer-ci.com/g/Barelydead/oop-chess/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/Barelydead/oop-chess/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/Barelydead/oop-chess/badges/build.png?b=master)](https://scrutinizer-ci.com/g/Barelydead/oop-chess/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Barelydead/oop-chess/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Barelydead/oop-chess/?branch=master)


Chess game
----------------

This is a Oop-style chess engine that can be used as a backend for a web chess game.

### Usage

#### Example code
```javascript
const Game = require("oop-chess");

Game.init("andersson", "johnsson");

console.log(Game.status());
Game.movePiece("B", 1, "C", 1)

console.log(Game.status());
Game.movePiece("G", 1, "F", 1)
console.log(Game.status());

Game.movePiece("A", 2, "C", 3)
console.log(Game.status());

```


### Install
`npm install --save oop-chess`
