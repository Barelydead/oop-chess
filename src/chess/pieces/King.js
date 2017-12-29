/**
 * King module
 * @module
 */
"use strict";

/**
 * Class with King logic
 */
class King {
    /**
     * init
     */
    constructor(color) {
        this.symbol = "K";
        this.moved = 0;
        this.active = true;
        this.color = color;
        this.rows = [null, "A", "B", "C", "D", "E", "F", "G", "H"];
        this.img = this.color === "white" ? "w-king" : "b-king";
    }

    legalMove(x, y, nx, ny) {
        let xNum = this.rows.indexOf(x);
        let nxNum = this.rows.indexOf(nx);

        let xStep = Math.abs(xNum - nxNum);
        let yStep = Math.abs(y - ny)
        if (xStep > 1 || yStep > 1) {
            return false
        }

        if (x == nx && y !== ny || x !== nx && y == ny) {
            return true
        }

        if (xStep === yStep) {
            return true
        }

        return false;
    }
}


module.exports = King;
