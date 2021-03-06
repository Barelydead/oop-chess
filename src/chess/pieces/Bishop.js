/**
 * Bishop module
 * @module
 */
"use strict";

/**
 * Class with Bishop logic
 */
class Bishop {
    /**
     * init
     */
    constructor(color) {
        this.symbol = "B";
        this.moved = 0;
        this.active = true;
        this.color = color;
        this.rows = [null, "A", "B", "C", "D", "E", "F", "G", "H"];
        this.img = this.color === "white" ? "w-bishop" : "b-bishop";
    }

    legalMove(x, y, nx, ny) {
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


module.exports = Bishop;
