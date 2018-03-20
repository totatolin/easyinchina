import React, { Component } from 'react';
import Head from './components/head/head.jsx';
import Wrap from './components/wrap/wrap.jsx';
import { FormattedMessage } from 'react-intl';
import {Provider, connect} from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './redux/action/index';
//引入locale配置文件，具体路径根据实际情况填写
import zh_CN from './locale/zh_CN';
import en_US from './locale/en_US';
import { IntlProvider, addLocaleData } from 'react-intl';
addLocaleData([...zh_CN, ...en_US]);

class App extends Component {
  render() {
    const {text, onChangeText, onButtonClick} = this.props;
    return (
      <IntlProvider 
            locale={'en'}
            messages={text}
        >
          <div className="app">
            <Head />
            <Wrap />
            <FormattedMessage
              id='hello'
              description='say hello to Howard.'
              defaultMessage='Hello, Howard'
              />
          </div>
      </IntlProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
