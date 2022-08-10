import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://avatars.mds.yandex.net/get-zen-logos/1520972/pub_5c6700cfb704ed00affe9fc5_5e6674fc8b6d587d1e98ba40/xxh'/>

        <div className={s.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
          
        </div>

        

    
        
      </header> 
}


export default Header;