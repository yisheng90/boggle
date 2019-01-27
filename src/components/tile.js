import React, {Component} from 'react';

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.tiles = ['T', 'A', 'P', '*', 'E', 'A', 'K', 'S', 'O', 'B', 'R', 'S', 'S', '*', 'X', 'D'];
    }

    _renderTiles() {
        return this.tiles.map((tile) => {
            return tile;
        })
    }

    render() {
        return (
            <div className="gameBoard">
                {this._renderTiles()}
            </div>
        );
    }
}

export default GameBoard;
