import React from 'react';
import './router.scss';
import Tabs from './tabs/tabs';
class Routers extends React.Component {
  render () {
    return (
      <div>
        <div className="wrap">
          <Tabs />
        </div>
      </div>
    )
  }
}
export default Routers;