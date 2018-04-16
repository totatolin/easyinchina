import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
// import './first-tabs.scss';

class FirstTabs extends Component {
  constructor() {
    super();
    this.state = {
      allSecondTabs: {
        'restaurants': ['american', 2, 3, 4, 5, 6, 7, 8, 9, 0],
        'work': [4, 5, 6]
      }
    }
  }
  showSecondTabs = () => {
    let selectedTab = this.state.allSecondTabs[this.props.type]
    this.props.showSecondTabs(selectedTab, this.props.type)
  }
  render() {
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
    return (
      // <a onClick={this.showSecondTabs}>{this.props.type}</a>
      <Dropdown overlay={menu} placement="bottomCenter">
        <a className="ant-dropdown-link" href="#">
          {this.props.type}
        </a>
      </Dropdown>
    );
  }
}

export default FirstTabs;