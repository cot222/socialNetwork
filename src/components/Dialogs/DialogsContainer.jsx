import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageCreator,updateNewMessageBodyCreactor} from '../../redux/dialogs-reducer';
import {connect} from "react-redux";

/*const DialogsContainer = () => {

    return <StoreContext.Consumer>
            {
                (store) => 
                {
                    let state = store.getState().dialogsPage;

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    }

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreactor(body));
                    }
                    return <Dialogs updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}  />
                }
            }
        </StoreContext.Consumer>
        
}
*/
let mapStateToProps = (state) => {  //возвращает стэйт
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {   //возвращает функции диспатч
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreactor(body));
        },
        sendMessage: () =>{
            dispatch(sendMessageCreator());
        }
    }
}



const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
/*передали две функции в первом вызове(подготовили структуру),второй вызов - вокруг какой презентационной 
компоненты будет всё происходить*/




export default SuperDialogsContainer;