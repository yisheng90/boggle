import React, {Component} from 'react';
import './App.css';
import Game from './components/game/game';
import HomePage from './components/homepage/home'

class App extends Component {
    constructor(props) {
        super(props);
        this.pages = [<HomePage />, <Game/>];
        this.state = {
            currentIdx: 0,
        }
    }

    _renderPage() {
        return this.pages[this.state.currentIdx];
    }

    render() {
        return (
            <div className="App">
                {this._renderPage()}
            </div>
        );
    }
}

export default App;
