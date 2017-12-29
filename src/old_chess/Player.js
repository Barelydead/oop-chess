const Pawn = require("./pieces/Pawn");
const Rook = require("./pieces/Rook");
const Bishop = require("./pieces/Bishop");
const King = require("./pieces/King");
const Queen = require("./pieces/Queen");
const Knight = require("./pieces/Knight");

/**
 * The chess player module
 * @module
 */
"use strict";

/**
 * Player class to controll the players pieces
 */
class Player {
    /**
     * Constructor that that inits a player with name and oclor
     * @param {String} color
     * @param {String} name
     */
    constructor(color, name) {
        this.color = color;
        this.name = name;
        this.takesPieces = [];
        this.pawns = [];
        this.rooks = [];
        this.bishops = [];
        this.knights = [];
        this.queen = new Queen(color);
        this.king = new King(color);

        for (let i = 0; i < 8; i++) {
            this.pawns.push(new Pawn(color));
        }

        for (let i = 0; i < 2; i++) {
            this.rooks.push(new Rook(color));
        }

        for (let i = 0; i < 2; i++) {
            this.bishops.push(new Bishop(color));
        }

        for (let i = 0; i < 2; i++) {
            this.knights.push(new Knight(color));
        }
    }

    getActivePieces() {

    }
}

module.exports = Player;
