import React, {Component} from 'react';
import Logo from '../../elements/logo/logo';
import List from '../list/list';
import Button from '../../elements/button/button';
import './summary.css';


class Summary extends Component {
  render() {
    return (
      <div className="summary">
        <Logo/>
        <div className="summaryBoard">
          <div>
            Total Score: {this.props.totalScore}
          </div>
          <div>
            Number of Words: {this.props.answers.length}
          </div>
        </div>
        <List answers={this.props.answers}/>
        <Button title="Again!" onClickHandler={this.props.onClickHandler}/>
      </div>
    );
  }
}

export default Summary;
