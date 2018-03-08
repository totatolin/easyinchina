import React, { Component } from 'react';
import Head from './components/head/head.jsx';
import Routers from './components/wrap/router.jsx';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Head />
        <Routers />
      </div>
    );
  }
}

export default App;
