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

    isValidStringInput(word, dices = [], selectedDices = []) {
        if (!word) {
            return true;
        }
        let startingDices = dices.filter((dice) => dice.word === word.charAt(0) || dice.word === "*");
        let isValid = false;

        while (!isValid && startingDices.length > 0) {
            let currentDice = startingDices.shift();
            if (!selectedDices.includes(currentDice)) {
                selectedDices.push(currentDice);
                isValid = this.isValidStringInput(word.substring(1), currentDice.adjecents, selectedDices);
                if (!isValid) {
                    selectedDices.pop();
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
