import React from 'react';
import './wrap.scss';
import Tabs from './tabs/tabs';
import Sidebar from './sidebar/sidebar';
class wrap extends React.Component {
  render () {
    return (
      <div>
        <div className="wrap">
          <Tabs />
          <Sidebar />
        </div>
      </div>
    )
  }
}
export default wrap;