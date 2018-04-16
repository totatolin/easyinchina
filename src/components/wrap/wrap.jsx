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
          <div className="body">
            <Contents />
            <Sidebar />
          </div>
        </div>
      </div>
    )
  }
}
export default wrap;