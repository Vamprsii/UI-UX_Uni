import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import { FaInstagram, FaVk, FaTelegram } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div>
                    <Link to="/" className={styles.footerTitle}>Petal Whispers</Link>
                    <div className={styles.footerColumns}>
                        <div className={styles.footerColumn}>
                            <p><Link to="/about" className={styles.footerLink}>О нас</Link></p>
                            <p>Каталог</p>
                        </div>
                        <div className={styles.footerColumn}>
                            <p><Link to="/delivery" className={styles.footerLink}>Доставка</Link></p>
                            <p>Отзывы</p>
                        </div>
                        <div className={styles.footerColumn}>
                            <p>Сотрудничество</p>
                            <p>Акции</p>
                        </div>
                    </div>
                </div>
                <div className={styles.footerContact}>
                    <div className={styles.socialIcons}>
                        <FaInstagram />
                        <FaVk />
                        <FaTelegram />
                    </div>
                    <p className={styles.phone}>+1 (234) 567-89-00</p>
                    <p className={styles.email}>info@petalflowers.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
