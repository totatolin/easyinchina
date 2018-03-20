import React from 'react';
import Routers from '../../../router/router.jsx';
import './contents.scss';
class Contents extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render () {
    return (
      <div className="contents">
        <Routers />
      </div>
    )
  }
}
export default Contents;