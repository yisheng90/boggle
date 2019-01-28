import React, {Component} from 'react';
import Dice from '../../elements/dice/dice';
import Input from '../../elements/input/input';
import './board.css';

class GameBoard extends Component {
  _renderDices(dices) {
    return dices.map((dice, index) => {
      let key = `${dice.word}-${index}`
      return <Dice dice={dice} key={key}/>;
    });
  }
  
  _renderRows() {
    let rows = [];
    for (let i = 0; i < 4; i++) {
      let targetDices = this.props.dices.slice(i * 4, i * 4 + 4);
      rows.push(targetDices);
    }
    
    return rows.map((row, index) => {
      let key = `diceRow-${index}`;
      return (
        <div className="diceRow" key={key}>
          {this._renderDices(row)}
        </div>
      );
    });
  }
  
  render() {
    return (
      <div className="gameBoard">
        <div className="diceHolder">
          {this._renderRows()}
        </div>
        <Input onChangeHandler={this.props.onChangeHandler}/>
      </div>
    );
  }
}

export default GameBoard;
