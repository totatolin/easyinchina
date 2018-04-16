import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import { HashRouter as Router, Link } from 'react-router-dom';
import './first-tabs.scss';

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
    const {allSecondTabs} = this.state
    const menu = (
      <Menu>
        {allSecondTabs[this.props.type].map((item) => {
        return (
          <Menu.Item>
            <Router>
              <Link to={"/" + this.props.type + "/" + item}>{item}</Link>
            </Router>
          </Menu.Item>
        )
      })}
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