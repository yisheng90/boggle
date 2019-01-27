import TrieDictionary from "./dictionary";

// const texts = require('/public/dictionary.txt');


class TextValidator {
    constructor() {
        this.dictionary = new TrieDictionary();
    }

    init() {
        let self = this
        fetch('/dictionary.txt')
            .then(res => res.text())
            .then(text => {
                text.split("\n").forEach((word) => self.dictionary.insert(word));
            });
    }

    isValidStringInput(word, tiles = [], selectedTiles = []) {
        if (!word) {
            return true;
        }
        let startingTiles = tiles.filter((tile) => tile.word === word.charAt(0) || tile.word === "*");
        let isValid = false;

        while (!isValid && startingTiles.length > 0) {
            let currentTile = startingTiles.shift();
            if (!selectedTiles.includes(currentTile)) {
                selectedTiles.push(currentTile);
                isValid = this.isValidStringInput(word.substring(1), currentTile.adjecents, selectedTiles);
                if (!isValid) {
                    selectedTiles.pop();
                }
            }

        }
        return isValid;
    }


    isWordSubmitted(word, answers = []) {
        return answers.find((answer) => answer.word === word);
    }


    isValidWord(word) {
        return this.dictionary.find(word);
    }

}

export default TextValidator