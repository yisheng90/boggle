import React, {Component} from 'react';
import Badge from '../../elements/badge/badge';
import './list.css';

class List extends Component {
  _renderList() {
    return this.props.answers.map((answer) => {
      let key = `${answer.word}-list-badge`;
      return <Badge word={answer.word} score={answer.score} key={key}/>;
    });
  }
  
  render() {
    return (
      <div className="listWrapper">
        {this._renderList()}
      </div>
    );
  }
}

export default List;
