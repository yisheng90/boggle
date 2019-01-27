import React, {Component} from 'react';
import './input.css';

class Input extends Component {
    render() {
        return (
            <div className="inputWrapper">
                <input type="text" name="word" id="wordInput" className="input" placeholder="Your Word"/>
            </div>
        )
    }
}

export default Input;
