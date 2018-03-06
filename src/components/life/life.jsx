import React, { Component } from 'react';
import axios from 'axios';
// import './life.scss';

class Life extends Component {
	constructor () {
		super();
    axios.get('/proxy-api/test/test')
    .then((res) => {})
	}
  render() {
    return (
      <div className="life">
        life
      </div>
    );
  }
}

export default Life;