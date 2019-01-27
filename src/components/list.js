import React, {Component} from 'react';
import './list.css';

class List extends Component {
    _renderList() {
        return this.props.answers.map((answer) => {
            return (
                <div className="listItem">
                    {answer.word} {answer.score}
                </div>
            );
        })
    }


    render() {
        return (
            <div className="listWrapper">
                {this._renderList()}
            </div>
        )
    }
}

export default List;
