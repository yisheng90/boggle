import React, {Component} from 'react';
import './dice.css';

class Dice extends Component {
    render() {
        return (
            <div className="tile">
                <div>{this.props.dice}</div>
            </div>
        );
    }
}

export default Dice;
