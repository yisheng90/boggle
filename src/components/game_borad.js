import React, {Component} from 'react';
import './game_board.css';
import Tile from './tile';

class GameBoard extends Component {
    _renderTiles() {
        return this.props.tiles.map((tile) => {
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
