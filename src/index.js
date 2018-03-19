import React from 'react';
import ReactDOM from 'react-dom';
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
import { IntlProvider } from 'react-intl';

ReactDOM.render(<IntlProvider 
            locale={'en'} 
            messages={en_US}
        >
            <App />
        </IntlProvider>, document.getElementById('root'));
registerServiceWorker();
