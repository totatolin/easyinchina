import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import American from '../components/wrap/contents/restaurants/american/american';
class Routers extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render () {
    return (
      <Router>
        <Route path="/restaurants/american" component={American} />
      </Router>
    )
  }
}
export default Routers;