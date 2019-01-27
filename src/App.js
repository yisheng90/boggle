import React, {Component} from 'react';
import './App.css';
import Boggle from './model/game';
import GameBoard from './components/game_borad';
import Timer from './components/timer';
import Input from './components/input';
import List from './components/list';

class App extends Component {
    constructor(props) {
        super(props)
        this.game = new Boggle();
        this.game.init();
        this.state = {
            alphabets: this.game.tiles.map((tile) => tile.word.toUpperCase()),
            hasStarted: true,
            hasTimeOut: false,
            totalScore: this.game.totalScore,
            answers: this.game.answers,
        }
        this.addWord = this.addWord.bind(this);
    }


    addWord(event) {
        if (this.state.hasTimeOut === false && event.keyCode === 13 && event.target.value.length > 0) {
            this.game.addWord(event.target.value);
            this.setState({
                answers: this.game.answers,
                totalScore: this.game.totalScore,
            })
        }
    }

    restart() {

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Boggle
                </header>

                <Timer isStarted={this.state.hasStarted}/>
                <div className="App-body">
                    <GameBoard tiles={this.state.alphabets}/>
                    <div>

                        <Input onChangeHandler={this.addWord}/>
                        <List answers={this.state.answers}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
