import React, { Component } from 'react';
import Head from './components/head/head.jsx';
import Wrap from './components/wrap/wrap.jsx';
import { FormattedMessage } from 'react-intl';
import {Provider, connect} from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './redux/action/index';

class App extends Component {
  render() {
    console.log(this)
    return (
      <div className="app">
        <Head />
        <Wrap />
        <FormattedMessage
          id='hello'
          description='say hello to Howard.'
          defaultMessage='Hello, Howard'
          />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
