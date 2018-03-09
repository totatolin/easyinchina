import React, { Component } from 'react';
import './head.scss';
import Modals from '../modal/login/login.jsx';

class Head extends Component {
  render() {
    return (
      <div className="head ft20 color-white">
        <p className="pull-left">Easy in China</p>
       <Modals />
      </div>
    );
  }
}

export default Head;