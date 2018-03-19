import React, { Component } from 'react';
import Head from './components/head/head.jsx';
import Wrap from './components/wrap/wrap.jsx';
import { FormattedMessage } from 'react-intl';

class App extends Component {
  render() {
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

export default App;
