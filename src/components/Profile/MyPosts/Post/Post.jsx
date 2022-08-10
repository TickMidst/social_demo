import s from './Post.module.css'


const Post = (props) => {
    return    (
    <div className={s.item}>
      <img src='https://cs13.pikabu.ru/post_img/2021/04/15/5/og_og_1618467397286014585.jpg'></img>
      {props.message}
      <div>
      {props.likeCount} likes
      </div>
    </div>
    )
}


export default Post;