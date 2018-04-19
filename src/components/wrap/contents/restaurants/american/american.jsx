import React from 'react';
import Item from '../../components/components';
import axios from 'axios';
import qs from 'qs';
import './american.scss';
class American extends React.Component {
  constructor() {
    super();
    this.state = {
      result: null
    }
  }
  componentDidMount = () => {
    axios.post('/proxy-api/shop-list/list', qs.stringify({
      username: 'linsen',
      password: 'ls3535135'
    }))
    .then((res) => {
      this.setState({
        result: <div>
          {res.data.payload.map((item) => {
            return (
              <Item item={item} />
            )
          })}
        </div>
      });
    })
  }
  render () {
    const {result} = this.state;
    console.log(result)
    return (
      <div className="american">
        {result}
      </div>
    )
  }
}
export default American;