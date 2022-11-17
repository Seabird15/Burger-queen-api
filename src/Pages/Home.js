
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// ---
import styles from '../Pages/Home.module.css'
import logo from '../img/logo mediano.png'

export default function Home() {
    return (
    <div className={styles.Home}>
        <header className={styles.HomeHeader}>
             <img src={logo} className={styles.logo} alt="logo"/> 
        
        <div className='Client-header'>
            <Link to="/Products" className={styles.mesero}>Soy MESERX</Link>
            <Link to="/Cocina" className={styles.cocina}>Soy COCINA</Link> 
        </div>
        </header>
    </div> 
    )
}
