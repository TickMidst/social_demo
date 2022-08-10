import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import React from 'react';
import { Redirect } from 'react-router';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <img src={props.avatar} />
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={props.status}>

        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Purple_circle_100%25.svg/220px-Purple_circle_100%25.svg.png' />
        {props.message}</div>
}

const Dialogs = (props) => {
    
    let messagesElements = props.messagesData.map((el) => { return <Message id={el.id} message={el.message} key={el.id} status={el.status} />
    })

    let addNewMessage = () => {
        props.addNewMessage();

    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text)
    }


    

      return (
        <div className={s.dialogs}>

            <div className={s.messages}>
                {messagesElements}

            <form>
                <textarea onChange={onMessageChange} placeholder='Enter your message' value={props.newMessageText}></textarea>
                <div>
                    <button onClick={addNewMessage}>Add</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Dialogs;