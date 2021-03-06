var assert = require('assert');
const game = require("../../src/chess/Game");

describe('Game module', function() {
    describe('init the game', function() {
        it("should have pieces on the board", function() {
            game.init();
            assert.equal(game.p1.color, "white");
            assert.equal(game.p2.color, "black");

            let square = game.board.getSquare("B", 1).piece;
            let pawn = game.p1.pawns[0];

            assert.equal(square, pawn);
        });


        it("player should have all pieces", function() {
            game.init();
            assert.equal(game.p1.pawns.length, 8);
            assert.equal(game.p2.bishops.length, 2);
        });

        it("Row return true if open false if closed", function() {
            // B2 to F2 open
            assert.equal(game.board.checkRow("B", 2, "F", 2), true)

            // B2 to B5 Closed
            assert.equal(game.board.checkRow("B", 5, "B", 2), false)
        });


        it("Diagonal return true if open false if closed", function() {
            assert.equal(game.board.checkDiagonal("B", 2, "D", 4), true)

            assert.equal(game.board.checkDiagonal("A", 1, "C", 3), false)
        });
    });
});
