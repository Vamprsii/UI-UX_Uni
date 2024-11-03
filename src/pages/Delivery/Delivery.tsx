import styles from './Delivery.module.css';
import pinkflower from '/src/assets/icons/pinkflower.svg';

const FloralDescriptionBox = ({ icon, heading }) => (
    <div className={styles.floralDescriptionBox}>
        <div className={styles.floralName}>
            <img src={icon} alt="Flower Icon" className={styles.flowerIcon} />
            <p className={styles.floralHeading}>{heading}</p>
        </div>
    </div>
);

function Delivery() {
    return (
        <div className={styles.deliveryInfo}>
            <img src="src/assets/images/Delivery.png" className={styles.deliveryCard} alt="Delivery" />
            <div className={styles.deliveryNotificationContainer}>
                <p className={styles.importantNoticeTextStyle}>Просим обратить внимание:</p>
                <div className={styles.textContainer}>
                    <FloralDescriptionBox
                        icon={pinkflower}
                        heading="Доставка осуществляется только в пределах г. Москвы и Московской области"
                    />
                    <FloralDescriptionBox
                        icon={pinkflower}
                        heading="Цена рассчитывается на основе вашего адреса в индивидульном порядке"
                    />
                    <FloralDescriptionBox
                        icon={pinkflower}
                        heading="Оплата производится банковской картой онлайн на сайте или банковской картой или наличными нашему курьеру"
                    />
                    <FloralDescriptionBox
                        icon={pinkflower}
                        heading="Самовывоз возможен только при согласовании времени и деталей с сотрудниками"
                    />
                </div>
                <button className={styles.pinkOrderButton}>Заказать</button>
            </div>
        </div>
    );
}

export default Delivery;
