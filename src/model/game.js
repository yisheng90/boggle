import Dice from './dice';
import TextValidator from '../lib/validator/validator';

const DICE_CONFIG = [
    ['*', 'e', 'i', 'l', 'r', 'x'],
    ['h', 'l', 'n', 'n', 'r', 'z'],
    ['d', 'e', '*', 'r', 'v', 'y'],
    ['e', 'l', 'r', 't', 't', 'y'],
    ['e', 'h', 'r', 't', '*', 'w'],
    ['e', 'e', 'g', 'h', 'n', 'w'],
    ['a', 'a', 'e', '*', 'g', 'n'],
    ['a', 'o', 'o', 't', 't', 'w'],
    ['e', '*', 'o', 's', 's', 't'],
    ['e', 'e', 'i', 'n', 's', 'u'],
    ['d', 'i', 's', '*', 't', 'y'],
    ['a', 'f', 'f', 'k', 'p', 's'],
    ['a', 'c', 'h', 'o', 'p', 's'],
    ['c', '*', 'm', 'o', 't', 'u'],
    ['h', 'i', 'm', 'n', '*', 'u'],
    ['a', 'b', 'b', 'j', 'o', 'o'],
];

class Boggle {
    constructor() {
        this.tiles = [];
        this.answers = [];
        this.totalScore = 0;
        this.validator = new TextValidator();
        this.validator.init();
    }

    init() {
        this.tiles = DICE_CONFIG.map((dice) => {
            let newDice = new Dice(dice);
            newDice.rollDice();
            return newDice;
        });
        this.tiles.forEach((tile, currentIdx) => {
            tile.populateAdjacentTiles(currentIdx, this.tiles)
        });
    }

    _getScore(word) {
        let length = word.length;
        if (length >= 8) {
            return 11;
        } else if (length === 7) {
            return 5;
        } else if (length === 6) {
            return 5;
        } else if (length === 5) {
            return 2;
        } else {
            return 1;
        }
    }

    addWord(word) {
        if (this.validator.isValidStringInput(word, this.tiles) && !this.validator.isWordSubmitted(word, this.answers) && this.validator.isValidWord(word)) {
            this.answers.push({
                word: word,
                score: this._getScore(word),
            });
            this.totalScore += this._getScore(word);
        }
    }

    restart() {
        this.answers = [];
        this.tiles.forEach((tile) => {
            tile.rollDice();
        });
    }

}

export default Boggle;