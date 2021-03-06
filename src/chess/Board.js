/**
 * A Chess board module
 * @module
 */
"use strict";

/**
 * Board class contains methods for setting up a chess board
 */
class Board {
    /**
     * Prepare board properties and init empty board
     */
    constructor() {
        this.board = {
            "A": [],
            "B": [],
            "C": [],
            "D": [],
            "E": [],
            "F": [],
            "G": [],
            "H": [],
        };

        this.rows = [null, "A", "B", "C", "D", "E", "F", "G", "H"];

        this.setUpEmptyTable();
    }


    /**
     * Set up empty board
     */
    setUpEmptyTable() {
        for (var key in this.board) {
            this.board[key] =
            [{"row": key}, {"square": key + 1}, {"square": key + 2}, {"square": key + 3}, {"square": key + 4}, {"square": key + 5}, {"square": key + 6}, {"square": key + 7}, {"square": key + 8}];
        }
    }


    /**
     * get the full board
     *
     * @returns {object} - current board state
     */
    getBoard() {
        return this.board;
    }

    /**
     * Check if the is anything blocking the path between 2 squares
     *
     * @returns {mixed} - true if free or square Coo if false
     */
    checkRow(x, y, nx, ny) {
        const direction = x == nx ? "horisontal" : "vertical";
        let row, list, xNumber, nxNumber, i;

        if (direction === "horisontal") {
            row = this.board[x];
            // Slice array to get squares to check
            list = y < ny ? row.slice(y + 1, ny) : row.slice(ny + 1, y);
        } else {
            row = [];
            for (i = 1; i < this.rows.length; i++) {
                row.push(this.board[this.rows[i]][y]);
            }
            // get numeric value of x nx
            xNumber = this.rows.indexOf(x);
            nxNumber = this.rows.indexOf(nx);

            // Slice array to get squares to check
            list = xNumber < nxNumber ? row.slice(xNumber, nxNumber - 1) : row.slice(nxNumber, xNumber - 1);
        }

        console.log(list);
        // loop squares and check type
        for (i = 0; i < list.length; i++) {
            if (list[i].piece.symbol !== "E") {
                return false;
            }
        }

        return true;
    }

    /**
     * Check if the is anything blocking the path between 2 squares
     *
     * @returns {bool} - true if free else false
     */
    checkDiagonal(x, y, nx, ny) {
        let xNumber, nxNumber, steps;
        steps = Math.abs(y - ny);
        xNumber = this.rows.indexOf(x)
        nxNumber = this.rows.indexOf(nx)

        if (xNumber < nxNumber && y < ny || xNumber > nxNumber && y > ny) {
            y = y > ny ? ny : y;
            xNumber = xNumber > nxNumber ? nxNumber : xNumber;
            for (let i = 1; i < steps; i++) {
                if (this.board[this.rows[xNumber + i]][y + i].piece.symbol !== "E") {
                    return false
                }
            }
        } else {
            y = y < ny ? ny : y;
            xNumber = xNumber > nxNumber ? nxNumber : xNumber;
            for (let i = 1; i < steps; i++) {
                if (this.board[this.rows[xNumber + i]][y - i].piece.symbol !== "E") {
                    return false
                }
            }
        }
        return true
    }

    /**
     * get a value for a specific square
     *
     * @returns {string}
     */
    getSquare(row, col) {
        return this.board[row][col];
    }


    /**
     * change the value of a square
     *
     * @returns {null}
     */
    updateSquare(row, col, value) {
        console.log(value);

        this.board[row][col].piece = value;
    }


    /**
     * Move a piece to another square
     * @param {int} - x, y, nx, ny
     * old xy coordinates and new xy coordinates
     *
     */
    move(x, y, nx, ny) {
        let square = this.getSquare(x, y);

        this.updateSquare(nx, ny, square.piece);
        this.updateSquare(x, y, {color: "", symbol: "E"});
    }


    /**
     * Check that destination is no of the same color as mover
     * @return {bool}
     */
    checkDestination(turn, x, y) {
        const square = this.getSquare(x, y);

        if (turn === square.piece.color) {
            return false;
        }

        return true;
    }


    /**
     * Return board as array
     * @return {array}
     */
    getBoardArray() {
        let boardArray = [];

        for (var key in this.board) {
            for (let i = 1; i < this.board[key].length; i++) {
                boardArray.push(this.board[key][i]);
            }
        }

        return boardArray;
    }
}


module.exports = Board;
