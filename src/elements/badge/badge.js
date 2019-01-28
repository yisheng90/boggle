import React, {Component} from 'react';
import './badge.css';

class Badge extends Component {
  render() {
    return (
      <div className="badge">
        <div>{this.props.word}</div>
        <div className="badgeTip">
          {this.props.score}
        </div>
      </div>
    );
  }
}

export default Badge;
