[![Code Coverage](https://scrutinizer-ci.com/g/Barelydead/oop-chess/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/Barelydead/oop-chess/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/Barelydead/oop-chess/badges/build.png?b=master)](https://scrutinizer-ci.com/g/Barelydead/oop-chess/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Barelydead/oop-chess/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Barelydead/oop-chess/?branch=master)


Chess game
----------------

This is a Oop-style chess engine that can be used as a backend for a web chess game.

### Usage

**Use the modules in an ongoing project**
npm install --save oop-chess

#### Example code
```javascript
const game = require("oop-chess");

game.init();

game.board.getAsciiBoard()
console.log(game.turn);

game.move("A", 1, "A", 5);

```


### Install
