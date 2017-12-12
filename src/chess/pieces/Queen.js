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
    }

    legalMove(x, y, nx, ny) {
        if (x == nx && y !== ny || x !== nx && y == ny) {
            return true
        }

        return false;
    }
}


module.exports = Queen;
