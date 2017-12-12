const Player = require("./Player");
const Board = require("./Board");


/**
 * The game module
 * @module
 */
"use strict";

/**
 * The main module that executes the game
 */
class Game {
    /**
     * Init Game with board, peices, and players
     */
    constructor() {
        this.p1 = new Player("white", "player1");
        this.p2 = new Player("black", "player2");
        this.board = new Board();
        this.gameBoard = this.board.board;
        this.turn = this.p1.color;
        this.lastMove = null;
    }


    /**
     * Init board with all player pieces
     * @param {object} - Preset gameboard Object
     */
    init(preset = null) {

        if (typeof preset !== "null") {
            this.bameBoard = preset;
        }
        //Pawns
        for (let i = 1; i <= 8; i++) {
            this.gameBoard["B"][i] = this.p1.pawns[i - 1];
        }

        for (let i = 1; i <= 8; i++) {
            this.gameBoard["G"][i] = this.p2.pawns[i - 1];
        }

        // Rooks
        this.gameBoard["A"][1] = this.p1.rooks[0];
        this.gameBoard["A"][8] = this.p1.rooks[1];
        this.gameBoard["H"][1] = this.p2.rooks[0];
        this.gameBoard["H"][8] = this.p2.rooks[1];

        // Knights
        this.gameBoard["A"][2] = this.p1.knights[0];
        this.gameBoard["A"][7] = this.p1.knights[1];
        this.gameBoard["H"][2] = this.p2.knights[0];
        this.gameBoard["H"][7] = this.p2.knights[1];

        // Bishops
        this.gameBoard["A"][3] = this.p1.bishops[0];
        this.gameBoard["A"][6] = this.p1.bishops[1];
        this.gameBoard["H"][3] = this.p2.bishops[0];
        this.gameBoard["H"][6] = this.p2.bishops[1];

        // King Queen
        this.gameBoard["A"][4] = this.p1.king;
        this.gameBoard["A"][5] = this.p1.queen;
        this.gameBoard["H"][4] = this.p2.king;
        this.gameBoard["H"][5] = this.p2.queen;
    }


    /**
    * Move a boardpiece and call helpfunctions to check legality of the move
    * @return {bool}, True if move executed correct otherwise False
    */
    movePiece(x, y, nx, ny) {
        const piece = this.board.getSquare(x, y);

        if (piece.color !== this.turn) {
            return false
        }

        this.board.move(x, y, nx, ny)
        this.lastMove = [x, y, nx, ny]
        this.nextPlayer();
        console.log(this.status());
        return true
    }

    /**
    * Set next player
    * @return {null}
    */
    nextPlayer() {
        this.turn = this.turn === "black" ? "white" : "black";
    }

    /**
    * Show the status of the game
    * @return {object}
    */
    status() {
        return {
            "Player to act": this.turn,
            "White name": this.p1.name,
            "Black name": this.p2.name,
            "last move": this.lastMove
        }
    }
}

module.exports = new Game();
