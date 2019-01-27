class Dice {
    constructor(letters = []) {
        this.word = letters[0];
        this.letters = letters;
        this.adjecents = [];
        console.log("this.letters", this.letters)
    }

    populateAdjacentTiles(currentIdx, array = []) {
        let target_index = [-5, -4, -3, -1, 1, 3, 4, 5];
        if (currentIdx % 4 === 0) {
            target_index = [-4, -3, 1, 4, 5];
        } else if (currentIdx % 4 === 3) {
            target_index = [-5, -4, -1, 3, 4];
        }
        this.adjecents = target_index.reduce((acc, idx) => {
            idx = currentIdx + idx;
            if ((idx >= 0 || idx <= 12) && array[idx]) {
                acc.push(array[idx])
            }
            return acc;
        }, []);
    }

    rollDice() {
        let idx = Math.floor(Math.random() * 6);
        this.word = this.letters[idx];
    }

    findAdjacent(word) {
        return this.adjecents.find((tile) => tile.word === word || tile.word === "*");
    }
}

export default Dice;