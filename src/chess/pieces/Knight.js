/**
 * Knight module
 * @module
 */
"use strict";

/**
 * Class with Knight logic
 */
class Knight {
    /**
     * init
     */
    constructor(color) {
        this.symbol = "N";
        this.moved = 0;
        this.active = true;
        this.color = color;
        this.rows = [null, "A", "B", "C", "D", "E", "F", "G", "H"];
        this.img = this.color === "white" ? "w-knight" : "b-knight";
    }

    legalMove(x, y, nx, ny) {
        let xNum = this.rows.indexOf(x);
        let nxNum = this.rows.indexOf(nx);

        let xStep = Math.abs(xNum - nxNum);
        let yStep = Math.abs(y - ny)

        if (xStep == 2 && yStep == 1 || xStep == 1 && yStep == 2) {
            return true;
        }

        return false;
    }
}


module.exports = Knight;
