/**
 * Queen module
 * @module
 */
"use strict";

/**
 * Class with Queen logic
 */
class Queen {
    /**
     * init
     */
    constructor(color) {
        this.symbol = "Q";
        this.moved = 0;
        this.active = true;
        this.color = color;
        this.rows = [null, "A", "B", "C", "D", "E", "F", "G", "H"];
        this.img = this.color === "white" ? "w-queen" : "b-queen";
    }

    legalMove(x, y, nx, ny) {
        // row
        if (x == nx && y !== ny || x !== nx && y == ny) {
            return true
        }

        let xNum = this.rows.indexOf(x);
        let nxNum = this.rows.indexOf(nx);

        let xStep = Math.abs(xNum - nxNum);
        let yStep = Math.abs(y - ny)
        if (xStep === yStep) {
            return true
        }

        return false;
    }
}


module.exports = Queen;
