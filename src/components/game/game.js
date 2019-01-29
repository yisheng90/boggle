import React, {Component} from 'react';
import Boggle from '../../model/game/game';
import Badge from '../../elements/badge/badge';
import GameBoard from '../board/board';
import Summary from '../summary/summary';
import Timer from '../../elements/timer/timer';
import './game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.game = new Boggle();
    this.state = {
      alphabets: this.game.dices.map((dice) => dice.word.toUpperCase()),
      hasStarted: false,
      hasTimeOut: false,
      totalScore: this.game.totalScore,
      answers: this.game.answers,
    };
    this.addWord = this._addWord.bind(this);
    this.startGame = this._startGame.bind(this);
    this.recordTimeOut = this._recordTimeOut.bind(this);
  }
  
  componentDidMount() {
    this._startGame()
  }
  
  componentDidUpdate(prevProps, nexProps, snapshot) {
    if (nexProps.alphabets !== this.state.alphabets) {
      this.setState({
        hasStarted: true,
        hasTimeOut: false,
      });
    }
  }
  
  _addWord(event) {
    if (this.state.hasTimeOut === false && event.keyCode === 13 && event.target.value.length > 0) {
      this.game.addWord(event.target.value);
      this.setState({
        answers: this.game.answers,
        totalScore: this.game.totalScore,
      });
      event.target.value = '';
    }
  }
  
  _recordTimeOut() {
    this.setState({
      hasTimeOut: true,
    });
  }
  
  _startGame() {
    this.game.init();
    this.setState({
      alphabets: this.game.dices.map((dice) => dice.word.toUpperCase()),
      hasStarted: false,
      hasTimeOut: false,
      totalScore: this.game.totalScore,
      answers: this.game.answers,
    });
  }
  
  _renderBadge() {
    let lastAnswer = this.state.answers[this.state.answers.length - 1];
    if (lastAnswer) {
      return (
        <Badge word={lastAnswer.word} score={lastAnswer.score}/>
      );
    }
  }
  
  _renderPage() {
    if (this.state.hasTimeOut) {
      return (
        <Summary totalScore={this.state.totalScore}
                 answers={this.state.answers}
                 onClickHandler={this.startGame}
        />
      );
    } else {
      return (
        <div>
          <div className="headerWrapper">
            <Timer isStarted={this.state.hasStarted}
                   timeLimit={this.game.timeLimit}
                   recordTimeOut={this.recordTimeOut}
            />
            
            <div className="textWhite">
              {this.state.totalScore}
            </div>
            
            <div>
              <a href="#" className="textLink" onClick={this.startGame}>Restart</a>
            </div>
          </div>
          
          <div className="bodyWrapper">
            {this._renderBadge()}
            <GameBoard dices={this.state.alphabets}
                       onChangeHandler={this.addWord}
            />
          </div>
        </div>
      );
    }
  }
  
  render() {
    return (
      <div>
        {this._renderPage()}
      </div>
    );
  }
}

export default Game;
