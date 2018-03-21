import React from 'react';
import { Menu } from 'antd';
import FirstTabs from './first-tabs/first-tabs';
import SecondTabs from './second-tabs/second-tabs';
class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      firstTabsType: String,
      secondTabsShow: false,
      selectedTab: Array
    }
  }
  showSecondTabs = (selectedTab, type) => {
    this.state.selectedTab = selectedTab;
    setTimeout(() => {
      this.setState({
        secondTabsShow: true,
        firstTabsType: type
      });
    }, 200)
  }
  clickOut = () => {
    this.setState({secondTabsShow: false});
  }
  render () {
    return (
      <div className="router mt50">
        <Menu style={{height: '100%'}}>
          <Menu.Item key="1">
            <FirstTabs type="restaurants" showSecondTabs={this.showSecondTabs.bind(this)} />
          </Menu.Item>
          <Menu.Item key="2">
            <FirstTabs type="work" showSecondTabs={this.showSecondTabs.bind(this)} />
          </Menu.Item>
        </Menu>
        <SecondTabs type={this.state.firstTabsType} list={this.state.selectedTab} secondTabsShow={this.state.secondTabsShow} clickOut={this.clickOut.bind(this)} />
      </div>
    )
  }
}
export default Tabs;