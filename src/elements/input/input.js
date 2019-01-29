import React, {Component} from 'react';
import './input.css';

class Input extends Component {
    render() {
        return (
            <div className="inputWrapper">
                <input type="text"
                       name="word"
                       className="input"
                       autoComplete="off"
                       placeholder="Your Word"
                       onKeyDown={(e) => this.props.onChangeHandler(e)}
                />
            </div>
        )
    }
}

export default Input;
