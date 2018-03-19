import React from 'react';
import './sidebar.scss';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  aaa = () => {
    console.log(this)
  }
  render () {
    return (
      <div className="sidebar">
        <div>
          <span onClick={this.aaa}>中文</span>
          <span>English</span>
        </div>
        <FormattedMessage
          id='hello'
          description='say hello to Howard.'
          defaultMessage='Hello, Howardkk'
          />
      </div>
    )
  }
}
export default Sidebar;