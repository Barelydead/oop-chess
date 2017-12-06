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
    }

    canMove(xy, newXy) {

    }
}


module.exports = King;
