import preloader from '../../assets/img/loading.gif';
import style from './preloader.module.css';

const Preloader = () => {
    return (
        <div className={style.wrapper}>
            <img src={preloader} alt="spinner" />
        </div>
    )
}

export default Preloader;