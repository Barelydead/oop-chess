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
    }

    legalMove() {

    }
}


module.exports = Pawn;
