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
            [key, key + 1, key + 2, key + 3, key + 4, key + 5, key + 6, key + 7, key + 8];
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
            list = xNumber < nxNumber ? row.slice(xNumber + 1, nxNumber) : row.slice(nxNumber + 1, xNumber);
        }

        // loop squares and check type
        for (i = 0; i < list.length; i++) {
            if (typeof list[i] !== "string") {
                return false;
            }
        }

        return true;
    }

    /**
     * Check if the is anything blocking the path between 2 squares
     *
     * @returns {mixed} - true if free or square Coo if false
     */
    checkDiagonal(x, y, nx, ny) {

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
        this.board[row][col] = value;
    }


    /**
     * Move a piece to another square
     * @param {int} - x, y, nx, ny
     * old xy coordinates and new xy coordinates
     *
     */
    move(x, y, nx, ny) {
        const piece = this.getSquare(x, y);

        this.updateSquare(x, y, x + y);
        this.updateSquare(nx, ny, piece);
    }


    /**
     * Asciify board
     *
     * @returns {String}
     */
    getAsciiBoard() {
        let ascii = "";

        for (var key in this.board) {
            for (let i = 0; i < this.board[key].length; i++) {
                if (typeof this.board[key][i] === "object") {
                    ascii += this.board[key][i].symbol + this.board[key][i].color[0] +  " | "
                } else {
                    ascii += this.board[key][i] +  " | ";
                }
            }
            ascii += "\n";
        }
        return ascii;
    }
}


module.exports = Board;
