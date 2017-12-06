var assert = require('assert');
const Game = require("../../src/chess/Game");

describe('Game module', function() {


    describe('init the game', function() {
        it("should have pieces on the board", function() {
            let game = new Game();
            game.init();


            assert.equal(game.p1.color, "white");
            assert.equal(game.p2.color, "black");

            assert.equal(game.p2.color, "black");

            let square = game.board.getSquare("B", 1);
            let pawn = game.p1.pawns[0];

            assert.equal(square, pawn);
        });


        it("player should have all pieces", function() {
            let game = new Game();
            game.init();


            assert.equal(game.p1.pawns.length, 8);
            assert.equal(game.p2.bishops.length, 2);
        });
    });
});
