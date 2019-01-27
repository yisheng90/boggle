import React, {Component} from 'react';
import './home.css';


class HomePage extends Component {
    render() {
        return (
            <div className="homePage">
                <div className="logo">
                    <span className="text-blue">B</span>
                    <span className="text-yellow">o</span>
                    <span className="text-blue">g</span>
                    <span className="text-yellow">g</span>
                    <span className="text-blue">l</span>
                    <span className="text-yellow">e</span>
                </div>

                <div className="buttonWrapper">
                   <button className="button">PLAY!</button>
                </div>
            </div>
        );
    }
}

export default HomePage;
