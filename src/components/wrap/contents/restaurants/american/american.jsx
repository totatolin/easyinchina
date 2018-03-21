import React from 'react';
import Item from '../../components/components';
import axios from 'axios';
import qs from 'qs';
import './american.scss';
class American extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount = () => {
    axios.post('/proxy-api/list/list', qs.stringify({
      username: 'linsen',
      password: 'ls3535135'
    }))
    .then((res) => {})
  }
  render () {
    return (
      <div className="american">
        {[1,2,3].map((item) => {
          return (
            <Item />
          )
        })}
      </div>
    )
  }
}
export default American;