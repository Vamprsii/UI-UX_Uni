import { Link } from 'react-router-dom';
import './footer.css';
import { FaInstagram, FaVk, FaTelegram } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <Link to="/" className="footer-title">Petal Whispers</Link>
                    <div className="footer-columns">
                        <div className="footer-column">
                            <p><Link to="/about" className="footer-link">О нас</Link></p>
                            <p>Каталог</p>
                        </div>
                        <div className="footer-column">
                            <p><Link to="/delivery" className="footer-link">Доставка</Link></p>
                            <p>Отзывы</p>
                        </div>
                        <div className="footer-column">
                            <p>Сотрудничество</p>
                            <p>Акции</p>
                        </div>
                    </div>
                </div>
                <div className="footer-contact">
                    <div className="social-icons">
                        <FaInstagram />
                        <FaVk />
                        <FaTelegram />
                    </div>
                    <p className="phone">+1 (234) 567-89-00</p>
                    <p className="email">info@petalflowers.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;