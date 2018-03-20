import Immutable from 'immutable'
import {SET_STATE, REQUEST_POSTS, RECEIVE_POSTS} from '../action/index'
import zh_CN from '../../locale/zh_CN';
import en_US from '../../locale/en_US';
import { IntlProvider, addLocaleData } from 'react-intl';
addLocaleData([...zh_CN, ...en_US]);

const aaa = () => {
  switch(navigator.language.split('_')[0]){
        case 'en':
            return en_US
            break;
        case 'zh':
            return zh_CN
            break;
        default:
            return zh_CN
            break;
    }
}
const initialState = {  
    text: aaa()
}  
export const reducer = (state = initialState, action) => {  
    switch (action.type) {  
        case 'CHANGE_TEXT':  
            return {  
                text: en_US  
            }  
        case 'BUTTON_CLICK':  
            return {  
                text: zh_CN  
            }  
        default:  
            return initialState;  
    }  
} 