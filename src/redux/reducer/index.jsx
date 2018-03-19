import Immutable from 'immutable'
import {SET_STATE, REQUEST_POSTS, RECEIVE_POSTS} from '../action/index'

const initialState = {  
    text: 'Hello'  
}  
export const reducer = (state = initialState, action) => {  
    switch (action.type) {  
        case 'CHANGE_TEXT':  
            return {  
                text: state.text=='Hello' ? 'world':'Hello'  
            }  
        case 'BUTTON_CLICK':  
            return {  
                text: 'Hello world'  
            }  
        default:  
            return initialState;  
    }  
} 