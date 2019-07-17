import React from 'react';
import Dialog from './../Dialogs.module.css';


const Message = (props) => {
    return (
        <div className={Dialog.message}>
            {props.message}
        </div>
    )
}

export default Message;