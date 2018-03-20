import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Life from '../components/wrap/life/life';
class Routers extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render () {
    return (
      <Router>
        <Route path="/life/1" component={Life} />
      </Router>
    )
  }
}
export default Routers;