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
     * Init board with all player pieces
     * @param {object} - Preset gameboard Object
     */
    init(preset = null, name1 = "player1", name2 = "player2") {
        this.p1 = new Player("white", name1);
        this.p2 = new Player("black", name2);
        this.board = new Board();
        this.gameBoard = this.board.board;
        this.turn = this.p1.color;
        this.lastMove = null;
        this.NrOfmoves = 0;

        if (typeof preset !== "null") {
            this.bameBoard = preset;
        }
        //Pawns
        for (let i = 1; i <= 8; i++) {
            this.gameBoard["B"][i].piece = this.p1.pawns[i - 1];
        }

        for (let i = 1; i <= 8; i++) {
            this.gameBoard["G"][i].piece = this.p2.pawns[i - 1];
        }

        for (let i = 1; i <= 8; i++) {
            this.gameBoard["C"][i].piece = {color: "", symbol: "E"};
            this.gameBoard["D"][i].piece = {color: "", symbol: "E"};
            this.gameBoard["E"][i].piece = {color: "", symbol: "E"};
            this.gameBoard["F"][i].piece = {color: "", symbol: "E"};
        }

        // Rooks
        this.gameBoard["A"][1].piece = this.p1.rooks[0];
        this.gameBoard["A"][8].piece = this.p1.rooks[1];
        this.gameBoard["H"][1].piece = this.p2.rooks[0];
        this.gameBoard["H"][8].piece = this.p2.rooks[1];

        // Knights
        this.gameBoard["A"][2].piece = this.p1.knights[0];
        this.gameBoard["A"][7].piece = this.p1.knights[1];
        this.gameBoard["H"][2].piece = this.p2.knights[0];
        this.gameBoard["H"][7].piece = this.p2.knights[1];

        // Bishops
        this.gameBoard["A"][3].piece = this.p1.bishops[0];
        this.gameBoard["A"][6].piece = this.p1.bishops[1];
        this.gameBoard["H"][3].piece = this.p2.bishops[0];
        this.gameBoard["H"][6].piece = this.p2.bishops[1];

        // King Queen
        this.gameBoard["A"][4].piece = this.p1.king;
        this.gameBoard["A"][5].piece = this.p1.queen;
        this.gameBoard["H"][4].piece = this.p2.king;
        this.gameBoard["H"][5].piece = this.p2.queen;
    }


    /**
    * Move a boardpiece and call helpfunctions to check legality of the move
    * @return {Bool}, False if illegal move
    */
    movePiece(x, y, nx, ny) {
        let square = this.board.getSquare(x, y);
        let nSquare = this.board.getSquare(nx, ny);
        let take;

        if (nSquare.piece.symbol !== "E" && nSquare.piece.color !== square.piece.color) {
            console.log("Take")
            take=true
        }

        if (square.piece.symbol === "E") {
            console.log("no piece to move");
            return false
        }

        if (!square.piece.legalMove(x, y, nx, ny, take)) {
            console.log("piece cant move like that");
            return false;
        }

        if (square.piece.color !== this.turn) {
            console.log("Wrong player")
            return false
        }

        if (!this.board.checkDestination(this.turn, nx, ny)) {
            console.log("destination is not valid")
            return false
        }


        if (square.piece.symbol === "B") {
            if (!this.board.checkDiagonal(x, y, nx, ny)) {
                console.log("diagonal blocked");
                return false
            }
        } else if (square.piece.symbol === "R") {
            if (!this.board.checkRow(x, y, nx, ny)) {
                console.log("Row blocked");
                return false
            }
        } else if (square.piece.symbol === "Q") {
            let direction;
            direction = (x === nx || y == ny) ? "row" : "diagonal";
            if (direction === "row" && !this.board.checkRow(x, y, nx, ny)) {
                console.log("Row blocked");
                return false
            }
            if (direction === "diagonal" && !this.board.checkDiagonal(x, y, nx, ny)) {
                console.log("diagonal blocked");
                return false
            }
        }

        this.board.move(x, y, nx, ny);
        this.lastMove = [x, y, nx, ny];
        this.gameBoard[nx][ny].piece.moved += 1;
        this.nextPlayer();
        this.NrOfmoves += 1;
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
            "Last move": this.lastMove,
            "Board": this.board.getBoardArray()
        }
    }
}

module.exports = new Game();
