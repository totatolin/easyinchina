import React, { Component } from 'react';
import './head.scss';
import Modals from '../modal/modal.jsx';
import {Provider, connect} from 'react-redux';
import { Menu, Dropdown, Icon } from 'antd';
import { mapStateToProps, mapDispatchToProps } from '../../redux/action/index';

class Head extends Component {
  state = {
    hasLoginin: true
  }
  render() {
    var login = null
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
      </Menu>
    )
    if (this.state.hasLoginin) {
      login = <Dropdown overlay={menu} placement="bottomCenter">
                <a className="ant-dropdown-link" href="#">
                  Username 
                </a>
              </Dropdown>
    } else {
      login = <Modals type="login" />
    }
    return (
      <div className="head ft20 color-white">
      	<div className="head-content">
      		<p className="pull-left">Easy in HangZhou</p>
          <input className="w300 h40"></input>
          <div className="pull-right">
            {login}
          </div>
      	</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Head);