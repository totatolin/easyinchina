import React, { Component } from 'react';
import './head.scss';
import Modals from '../modal/modal.jsx';
import {Provider, connect} from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/action/index';

class Head extends Component {
  render() {
    return (
      <div className="head ft20 color-white">
        <p className="pull-left">Easy in China</p>
        <Modals type="login" />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head);