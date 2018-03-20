import React from 'react';
import './wrap.scss';
import Tabs from './tabs/tabs';
import Contents from './contents/contents';
import Sidebar from './sidebar/sidebar';
class wrap extends React.Component {
  render () {
    return (
      <div>
        <div className="wrap">
          <Tabs />
          <Contents />
          <Sidebar />
        </div>
      </div>
    )
  }
}
export default wrap;