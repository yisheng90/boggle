import React, {Component} from 'react';
import Logo from '../../elements/logo/logo';
import Button from '../../elements/button/button'
import './home.css';


class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <Logo/>
        <Button title="PLAY!" onClickHandler={this.props.onClickHandler}/>
      </div>
    );
  }
}

export default HomePage;
