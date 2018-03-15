import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import './register.scss';

class Register extends React.Component {
  register = () => {
    axios.post('/proxy-api/account/register', qs.stringify({
      username: 'linsen',
      password: 'ls3535135'
    }))
    .then((res) => {})
  }
  render() {
    return (
      <div className="register">
        <div className="title mb20">
          <h2 className="ft20">CREATE YOUR ACCOUNT</h2>
        </div>
        <div className="input">
          <input type="text" placeholder="E-mail address" className="wfull h50"></input>
          <input type="text" placeholder="Username" className="wfull h50"></input>
          <input type="password" placeholder="Password" className="wfull h50"></input>
          <input type="password" placeholder="Confirm password" className="wfull h50"></input>
        </div>
        <div className="btn wfull h40 ft18 lh40 mt30 color-white bc-blue1" onClick={this.register}>Register</div>
      </div>
    );
  }
}

export default Register;