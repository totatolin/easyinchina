/*
 * action 类型
 */

const changeTextAction = {  
        type:'CHANGE_TEXT'  
}  
const buttonClickAction = {  
        type:'BUTTON_CLICK'  
} 

//映射Redux state到组件的属性  
export function mapStateToProps(state) {  
    return { text: state.text }  
}  
  
//映射Redux actions到组件的属性  
export function mapDispatchToProps(dispatch){  
    return{  
        onButtonClick:()=>dispatch(buttonClickAction),  
        onChangeText:()=>dispatch(changeTextAction)  
    }  
} 