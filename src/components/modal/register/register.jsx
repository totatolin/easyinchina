import React, { Component } from 'react';
import './register.scss';

class Register extends React.Component {
  render() {
    return (
      <div className="register">
        <div className="title mb20">
          <h2 className="ft20">CREATE YOUR ACCOUNT</h2>
        </div>
        <div className="input">
          <input type="text" placeholder="E-mail address" className="wfull h50"></input>
          <input type="text" placeholder="Username" className="wfull h50"></input>
          <input type="password" placeholder="Password" className="wfull h50" autocomplete="new-password"></input>
          <input type="password" placeholder="Confirm password" className="wfull h50" autocomplete="new-password"></input>
        </div>
        <div className="btn wfull h40 ft18 lh40 mt30 color-white bc-blue1" onClick={this.login}>Register</div>
      </div>
    );
  }
}

export default Register;