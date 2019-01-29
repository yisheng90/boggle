import Dice from '../dice/dice';
import TextValidator from '../../lib/validator/validator';

const DICE_CONFIG = [
  ['d', 'e', 'i', 'l', 'r', 'x'],
  ['h', 'l', 'n', 'n', 'r', 'z'],
  ['d', 'e', 'l', 'r', 'v', 'y'],
  ['e', 'l', 'r', 't', 't', 'y'],
  ['e', 'h', 'r', 't', 'v', 'w'],
  ['e', 'e', 'g', 'h', 'n', 'w'],
  ['a', 'a', 'e', 'e', 'g', 'n'],
  ['a', 'o', 'o', 't', 't', 'w'],
  ['e', 'i', 'o', 's', 's', 't'],
  ['e', 'e', 'i', 'n', 's', 'u'],
  ['d', 'i', 's', 't', 't', 'y'],
  ['a', 'f', 'f', 'k', 'p', 's'],
  ['a', 'c', 'h', 'o', 'p', 's'],
  ['c', 'i', 'm', 'o', 't', 'u'],
  ['h', 'i', 'm', 'n', 'q', 'u'],
  ['a', 'b', 'b', 'j', 'o', 'o'],
];

class Boggle {
  constructor() {
    this.dices = DICE_CONFIG.map((dice) => new Dice(dice));
    this.answers = [];
    this.totalScore = 0;
    this.timeLimit = 180;
    this.validator = new TextValidator();
    this.validator.init();
  }
  
  init() {
    this.answers = [];
    this.totalScore = 0;
    this._rollDices();
    this._addWildCards(2);
    this._populateBoard();
  }
  
  addWord(word) {
    if (this.validator.isValidStringInput(word, this.dices) && !this.validator.isWordSubmitted(word, this.answers) && this.validator.isValidWord(word)) {
      this.answers.push({
        word: word,
        score: this._getScore(word),
      });
      this.totalScore += this._getScore(word);
    }
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
  
  _rollDices() {
    for (let i = 0; i < this.dices.length; i++) {
      let idx = Math.floor(Math.random() * this.dices.length);
      this.dices[i].rollDice();
      this.dices[idx].rollDice();
      let temp = this.dices[idx];
      this.dices[idx] = this.dices[i];
      this.dices[i] = temp;
    }
  }
  
  _populateBoard() {
    this.dices.forEach((dice, currentIdx) => {
      dice.populateAdjacentDices(currentIdx, this.dices);
    });
  }
  
  _addWildCards(num) {
    while (num > 0) {
      let idx = Math.floor(Math.random() * this.dices.length);
      if (this.dices[idx].word !== "*") {
        this.dices[idx].word = "*";
        num--;
      }
    }
  }
}

export default Boggle;
