import preloader from './../../../assets/images/preloader.svg'
import styles from './preloader.module.css'


let Preloader = (props) => {
    return  <img className={styles.preloader} src={preloader}/> 
}


export default Preloader