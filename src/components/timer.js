import React, {Component} from 'react';
import './timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStarted: false,
            time: 180,
        }
    }

    componentDidMount() {
        let self = this;
        if (self.props.isStarted === true) {
            let timer = setInterval(() => {
                let time = self.state.time - 1;
                if (time === 0) {
                    clearInterval(timer)
                }

                self.setState({
                    time: time
                })
            }, 1000)
        }
    }

    _getSeconds() {
        let second =  Math.floor(this.state.time % 60).toString();
        second = (second.length === 1) ? '0' + second : second;
        return second
    }

    _getMinutes() {
        let minutes = Math.floor(this.state.time / 60).toString();
        minutes = (minutes.length === 1) ? '0' + minutes : minutes;
        return minutes
    }

    render() {
        return (
            <div className="timer">
                <div className="minutes">
                    {this._getMinutes()}
                </div>
                <div className="seperator">:</div>
                <div className="second">
                    {this._getSeconds()}
                </div>
            </div>
        );
    }
}

export default Timer;
