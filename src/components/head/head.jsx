import React, { Component } from 'react';
import './head.scss';
import Modals from '../modal/modal.jsx';
import {Provider, connect} from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/action/index';

class Head extends Component {
  render() {
    return (
      <div className="head ft20 color-white">
      	<div className="head-content">
      		<p className="pull-left">Easy in HangZhou</p>
          <input className="w300 h40"></input>
          <div className="pull-right">
            <Modals type="login" />
          </div>
      	</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head);