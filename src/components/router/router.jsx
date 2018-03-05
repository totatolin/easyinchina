import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Life from '../life/life.jsx';
import Work from '../work/work.jsx';
class Routers extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (
      <Router>
        <div>
          <div>
            <div>
              <Link to="/life">life</Link>
            </div>
            <div>
              <Link to="/work">work</Link>
            </div>
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