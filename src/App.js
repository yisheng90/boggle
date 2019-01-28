import React, {Component} from 'react';
import './App.css';
import Game from './components/game/game';
import HomePage from './components/homepage/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.pages = [, <Game/>];
    this.state = {
      currentIdx: 0,
    };
    this.nextPage = this._nextPage.bind(this);
  }
  
  _nextPage() {
    this.setState({currentIdx: 1});
  }
  
  _renderPage() {
    if (this.state.currentIdx === 0) {
      return (<HomePage onClickHandler={this.nextPage}/>);
    }
    return (<Game/>);
  }
  
  render() {
    return (
      <div className="app">
        {this._renderPage()}
      </div>
    );
  }
}

export default App;
