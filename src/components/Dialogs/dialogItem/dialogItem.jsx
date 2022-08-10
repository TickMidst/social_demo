import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (prop) => {
    let path = '/dialogs/' + prop.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{prop.name}</NavLink>
        </div>
} 

export default DialogItem;