/**
 * Piece module that is parent to all pices
 * @module
 */
"use strict";

/**
 * Piece class
 */
class Piece {
    /**
     * init
     */
    constructor(color) {
        this.symbol;
        this.moved = 0;
        this.active = true;
        this.color;
    }

    legalMove() {

    }
}


module.exports = Piece;
