import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'antd';
import FirstTabs from './first-tabs/first-tabs';
import SecondTabs from './second-tabs/second-tabs';
import Life from '../life/life';
import Work from '../work/work';
class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      secondTabsShow: false,
      selectedTab: Array
    }
  }
  showSecondTabs = (selectedTab) => {
    this.state.selectedTab = selectedTab;
    setTimeout(() => {
      this.setState({secondTabsShow: true});
    }, 200)
  }
  clickOut = () => {
    this.setState({secondTabsShow: false});
  }
  render () {
    return (
      <Router>
        <div>
          <div className="router mt50">
            <Menu style={{height: '100%'}}>
              <Menu.Item key="1">
                <FirstTabs type="life" showSecondTabs={this.showSecondTabs.bind(this)} />
              </Menu.Item>
              <Menu.Item key="2">
                <FirstTabs type="work" showSecondTabs={this.showSecondTabs.bind(this)} />
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/life">life</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/work">work</Link>
              </Menu.Item>
            </Menu>
          </div>

          <div>
            <Route exact path="/" component={Life} />
            <Route path="/life" component={Life} />
            <Route path="/work" component={Work} />
          </div>

          <SecondTabs list={this.state.selectedTab} secondTabsShow={this.state.secondTabsShow} clickOut={this.clickOut.bind(this)} />
        </div>
      </Router>
    )
  }
}
export default Tabs;