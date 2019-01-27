import React, {Component} from 'react';
import './game_board.css';
import Tile from './tile';

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.tiles = ['T', 'A', 'P', '*', 'E', 'A', 'K', 'S', 'O', 'B', 'R', 'S', 'S', '*', 'X', 'D'];
    }

    _renderTiles() {
        return this.tiles.map((tile) => {
            return <Tile tile={tile}/>;
        });
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
