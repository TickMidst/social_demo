import s from './../Dialogs.module.css'

const Message = (prop) => {
    return <div className={s.message}>{prop.message}</div>
}

export default Message;