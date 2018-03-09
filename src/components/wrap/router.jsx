import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'antd';
import './router.scss';
import FirstTabs from './tabs/first-tabs/first-tabs';
import SecondTabs from './tabs/second-tabs/second-tabs';
import Life from './life/life.jsx';
import Work from './work/work.jsx';
class Routers extends React.Component {
  constructor() {
    super();
    this.state = {
      secondTabsShow: false,
      selectedTab: Array
    }
  }
  showSecondTabs = (selectedTab) => {
    this.state.selectedTab = selectedTab;
    this.setState({secondTabsShow: true});
  }
  render () {
    var secondTabs = null;
    if (this.state.secondTabsShow) {
      secondTabs = <SecondTabs list={this.state.selectedTab} />;
    } else {
      secondTabs = null;
    }
    return (
      <Router>
        <div className="wrap">
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

          {secondTabs} // 子项tab
        </div>
      </Router>
    )
  }
}
export default Routers;