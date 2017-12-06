var assert = require('assert');
const Board = require("../../src/chess/Board");


describe('Check that board returns', function() {
    it("board == getBoard", function() {
        let board = new Board();

        assert.equal(board.board, board.getBoard());
    });
});

describe('check the value of an empty square', function() {
    it("Should return Square Co if empty", function() {
        let board = new Board();

        assert.equal("F4", board.getSquare("F", 4));
    });
});

describe('Check that square updated', function() {
    it("should change to 'T'", function() {
        let board = new Board();
        board.updateSquare("F", 1, "T");

        assert.equal("T", board.getSquare("F", 1));
    });
});

describe('Check that piece moves as intended', function() {
    it("old x,y should be empty and nx, ny filled", function() {
        let board = new Board();
        board.updateSquare("A", 1, "T");
        assert.equal("T", board.getSquare("A", 1));

        board.move("A", 1, "B", 2);
        assert.equal("T", board.getSquare("B", 2));
        assert.equal("A1", board.getSquare("A", 1));
    });
});


describe('getAsciiBoard', function() {
    it("Should return string of lenght greater then 64", function() {
        let board = new Board();
        let string = board.getAsciiBoard();
        assert.ok(string.length > 64);
    });
});
