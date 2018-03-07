import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Menu } from 'antd';
import './router.scss';
import Life from '../life/life.jsx';
import Work from '../work/work.jsx';
class Routers extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (
      <Router>
        <div className="wrap">
          <div className="router mt50">
            <Menu style={{height: '100%'}}>
              <Menu.Item key="1">
                <Link to="/life">life</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/work">work</Link>
              </Menu.Item>
            </Menu>
          </div>

          <div>
            <Route exact path="/" component={Life} />
            <Route path="/life" component={Life} />
            <Route path="/work" component={Work} />
          </div>
        </div>
      </Router>
    )
  }
}
export default Routers;