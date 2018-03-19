import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './style/base.scss';
import './style/color.scss';
import './style/font.scss';
import './style/style.scss';

import { LocaleProvider, DatePicker, messagef, Menu } from 'antd';
import 'antd/dist/antd.css';

//引入locale配置文件，具体路径根据实际情况填写
import zh_CN from './locale/zh_CN';
import en_US from './locale/en_US';
import { IntlProvider, addLocaleData } from 'react-intl';
addLocaleData([...zh_CN, ...en_US]);

const chooseLocale =()=>{
    switch(navigator.language.split('_')[0]){
        case 'en':
            return en_US;
            break;
        case 'zh':
            return zh_CN;
            break;
        default:
            return en_US;
            break;
    }
}
ReactDOM.render(<IntlProvider 
            locale={'en'}
            messages={chooseLocale()}
        >
        	<Provider store={store}>
            	<App />
            </Provider>
        </IntlProvider>, document.getElementById('root'));
registerServiceWorker();
