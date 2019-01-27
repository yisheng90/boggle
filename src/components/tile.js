import React, {Component} from 'react';
import './tile.css';

class Tile extends Component {
    render() {
        return (
            <div className="tile">
                <span>{this.props.tile}</span>
            </div>
        );
    }
}

export default Tile;
