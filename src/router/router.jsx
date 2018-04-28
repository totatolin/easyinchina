import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import American from '../components/wrap/contents/restaurants/american/american';
import ShopDetails from '../components/wrap/contents/shopdetails/shopdetails';
class Routers extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render () {
    return (
      <div>
        <Router>
          <Route path="/restaurants/american" component={American} />
        </Router>
        <Router>
          <Route path="/shopdetails/:id" component={ShopDetails} />
        </Router>
      </div>
    )
  }
}
export default Routers;