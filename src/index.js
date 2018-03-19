import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';

import { createStore } from 'redux';  
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

//定义组件  
// class App extends Component{  
//     render() {  
//     	console.log(this)
//         const {text, onChangeText, onButtonClick} = this.props;  
//         return (  
//             <div>  
//                 <h1 onClick={onChangeText}> {text} </h1>  
//                 <button onClick={onButtonClick}>click me</button>  
//             </div>  
//         );  
//     }  
// }  
  
  
// // action  
// const changeTextAction = {  
//         type:'CHANGE_TEXT'  
// }  
// const buttonClickAction = {  
//         type:'BUTTON_CLICK'  
// }  
  
  
// //reducer  
// const initialState = {  
//     text: 'Hello'  
// }  
// const reducer = (state = initialState, action) => {  
//     switch (action.type) {  
//         case 'CHANGE_TEXT':  
//             return {  
//                 text: state.text=='Hello' ? 'world':'Hello'  
//             }  
//         case 'BUTTON_CLICK':  
//             return {  
//                 text: 'Hello world'  
//             }  
//         default:  
//             return initialState;  
//     }  
// }  
  
// // store  
// let store = createStore(reducer);  
  
// //映射Redux state到组件的属性  
// function mapStateToProps(state) {  
//     return { text: state.text }  
// }  
  
// //映射Redux actions到组件的属性  
// function mapDispatchToProps(dispatch){  
//     return{  
//         onButtonClick:()=>dispatch(buttonClickAction),  
//         onChangeText:()=>dispatch(changeTextAction)  
//     }  
// }  
  
// // 连接组件  
// App = connect(mapStateToProps, mapDispatchToProps)(App)  

ReactDOM.render(<IntlProvider 
            locale={'en'}
            messages={en_US}
        >
        	<Provider store={store}>
            	<App />
            </Provider>
        </IntlProvider>, document.getElementById('root'));
registerServiceWorker();
