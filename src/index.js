import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './style/base.scss';
import './style/color.scss';
import './style/font.scss';
import './style/style.scss';

// import { LocaleProvider, DatePicker, message } from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// import 'antd/dist/antd.css';

// moment.locale('zh-cn');

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: '',
//     };
//   }
//   handleChange(date) {
//     message.info('您选择的日期是: ' + date.toString());
//     this.setState({ date });
//   }
//   render() {
//     return (
//       <LocaleProvider locale={zhCN}>
//         <div style={{ width: 400, margin: '100px auto' }}>
//           <DatePicker onChange={value => this.handleChange(value)} />
//           <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
//         </div>
//       </LocaleProvider>
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
