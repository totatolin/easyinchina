import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store/index';

import './style/base.scss';
import './style/color.scss';
import './style/font.scss';
import './style/style.scss';

import { LocaleProvider, DatePicker, messagef, Menu } from 'antd';
import 'antd/dist/antd.css';

ReactDOM.render(<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
