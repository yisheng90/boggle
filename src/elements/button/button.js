import React, {Component} from 'react';
import './button.css';

class Button extends Component {
  render() {
    return (
      <div className="buttonWrapper">
        <button className="button" onClick={this.props.onClickHandler}>{this.props.title}</button>
      </div>
    );
  }
}

export default Button;
