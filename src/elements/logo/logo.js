import React, {Component} from 'react';
import './logo.css';

class Logo extends Component {
    render() {
        return (
          <div className="logo">
            <div className="text-blue dice" id="logoOne">B</div>
            <div className="text-yellow dice" id="logoTwo">O</div>
            <div className="text-blue dice" id="logoThree">G</div>
            <div className="text-yellow dice" id="logoFour">G</div>
            <div className="text-blue dice" id="logoFive">L</div>
            <div className="text-yellow dice" id="logoSix">E</div>
          </div>
        );
    }
}

export default Logo;
