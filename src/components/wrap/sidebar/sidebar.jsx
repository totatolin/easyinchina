import React from 'react';
import './sidebar.scss';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../../redux/action/index';
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
    const {text, onChangeText, onButtonClick} = this.props;
    return (
      <div className="sidebar">
        <div>
          <h1></h1> 
          <span onClick={onButtonClick}>中文</span>
          <span onClick={onChangeText}>English</span>
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
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);