import React from 'react';
import Dialog from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) =>{
    
    let path = "/Dialogs/"+ props.id;
    return(
        <div className={Dialog.itemDialogs} >
            <div className="row">
                <div className={Dialog.img}>
                    <img src={"/img/"+props.img} alt=""/>
            </div>
                <NavLink to={path} activeClassName={Dialog.activeLink}>{props.name}</NavLink>
            </div>
        </div>
    )
}


export default DialogItem;