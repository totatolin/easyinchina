import React, { Component } from 'react';
import Head from './components/head/head.jsx';
import Wrap from './components/wrap/wrap.jsx';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Head />
        <Wrap />
      </div>
    );
  }
}

export default App;
