/**
 * Pawn module
 * @module
 */
"use strict";

/**
 * Class with Pawn logic
 */
class Pawn {
    /**
     * init
     */
    constructor(color) {
        this.symbol = "P";
        this.moved = 0;
        this.active = true;
        this.color = color;
        this.rows = [null, "A", "B", "C", "D", "E", "F", "G", "H"];
        this.img = this.color === "white" ? "w-pawn" : "b-pawn";
    }

    legalMove(x, y, nx, ny, take=false) {
        let direction = this.color === "black" ? "up" : "down";

        let xNum = this.rows.indexOf(x);
        let nxNum = this.rows.indexOf(nx);

        let xStep = xNum - nxNum;
        let yStep = Math.abs(y - ny);

        if (take === true) {
            if (direction === "up" && xStep === 1 && yStep === 1
                || direction === "down" && xStep === -1 && yStep === 1) {
                return true;
            }
        } else {
            if (this.moved === 0) {
                if (direction === "up" && xStep === 2 && yStep === 0
                    || direction === "down" && xStep === -2 && yStep === 0) {
                    return true;
                }
            }

            if (direction === "up" && xStep === 1 && yStep === 0
                || direction === "down" && xStep === -1 && yStep === 0) {
                return true;
            }
        }

        return false;
    }
}


module.exports = Pawn;
