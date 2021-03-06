/**
 * Rook module
 * @module
 */
"use strict";

/**
 * Class with Rook logic
 */
class Rook {
    /**
     * init
     */
    constructor(color) {
        this.symbol = "R";
        this.moved = 0;
        this.active = true;
        this.color = color;
        this.rows = [null, "A", "B", "C", "D", "E", "F", "G", "H"];
        this.img = this.color === "white" ? "w-rook" : "b-rook";
    }

    legalMove(x, y, nx, ny) {
        if (x == nx && y !== ny || x !== nx && y == ny) {
            return true
        }

        return false;
    }
}


module.exports = Rook;
