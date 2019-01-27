import React, {Component} from 'react';

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
        let timer = setInterval(() => {
            let time = self.state.time - 1;
            if (time < 0) {
                clearInterval(timer)
            }

            self.setState({
                time: time
            })
        }, 1000)
    }

    _getSeconds() {
        return Math.floor(this.state.time % 60);
    }

    _getMunutes() {
        return Math.floor(this.state.time / 60);
    }

    render() {
        return (
            <div className="timer">
                <div className="minutes">
                    {this._getMunutes()}
                </div>
                <div className="second">
                    {this._getSeconds()}
                </div>
            </div>
        );
    }
}

export default Timer;
