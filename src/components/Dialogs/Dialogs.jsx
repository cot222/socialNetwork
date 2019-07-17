import React from 'react';
import Dialog from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {


    let state = props.dialogsPage;

    let messagesElements = state.messageData.map( messageItem =>  <Message message={messageItem.message} key={messageItem.id} id={messageItem.id}/>  );
    let DialogsElements = state.dialogData.map ( el => <DialogItem name={el.dialog} img={el.img} key={el.id} id={el.id}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    
    return (
        <div className="row">
            <div className={Dialog.windowContent}>
            <div> { messagesElements }</div>
            <div>
                <div><textarea placeholder='enter your message' value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
                <div><button onClick={onSendMessageClick}>Отправить</button></div>
            </div>
            </div>
            <div className={Dialog.windowDialogs}>
                { DialogsElements } 
            </div>
        </div>
    );
}
export default Dialogs;