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
    }

    legalMove(x, y, nx, ny) {
        if (x == nx && y !== ny || x !== nx && y == ny) {
            return true
        }

        return false;
    }
}


module.exports = Bishop;
