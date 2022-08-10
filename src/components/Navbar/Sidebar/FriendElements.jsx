import s from './Sidebar.module.css'


const FriendElements = (props) => {
    return    (
    <div className={s.friendElement}>
      <img src={props.avatar}></img>
      <div>
      {props.name}
      </div>
    </div>
    )
}


export default FriendElements;