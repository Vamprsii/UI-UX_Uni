import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <div className={styles.gradientBar}></div>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <button onClick={() => navigate('/about')}>О нас</button>
                        </li>
                        <li className={styles.navItem}>
                            <button>Каталог</button>
                        </li>
                        <div className={styles.logo} onClick={() => navigate('/')}>
                            <div className={styles.upperText}>Цветочный салон</div>
                            <div className={styles.text}>Petal Whispers</div>
                        </div>    
                        <li className={styles.navItem}>
                            <button onClick={() => navigate('/delivery')}>Доставка</button>
                        </li>
                        <li className={styles.navItem}>
                            <button>Отзывы</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
