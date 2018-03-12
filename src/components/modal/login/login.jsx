import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import './login.scss';

class Login extends React.Component {
  login = () => {
    axios.post('/proxy-api/account/login', qs.stringify({
      username: this.refs.username.value,
      password: this.refs.password.value
    }))
    .then((res) => {})
  }
  render() {
    return (
      <div className="login">
        <div className="title">
          <h2 className="ft50">Easy In China</h2>
          <h2 className="ft30">Join us, enjoy easier life</h2>
        </div>
        <div className="input">
          <input placeholder="Username or E-mail address" className="wfull h50" ref="username"></input>
          <input placeholder="Password" className="wfull h50" ref="password"></input>
        </div>
        <div className="btn wfull h40 ft18 lh40 mt30 color-white bc-blue1" onClick={this.login}>Login</div>
      </div>
    );
  }
}

export default Login;