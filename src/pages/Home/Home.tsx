import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import lightgreenflower from '/src/assets/icons/lightgreenflower.svg';
import pinkflower from '/src/assets/icons/pinkflower.svg';
import whiteflower from '/src/assets/icons/whiteflower.svg';
import bouquet from '/src/assets/images/bouquet.png';
import first from '/src/assets/images/flowersfirst.png';
import second from '/src/assets/images/flowerssecond.png';
import third from '/src/assets/images/flowerslast.png';
import forth from '/src/assets/images/gift.png';
import taylor from '/src/assets/images/taylor.png';

const FloralDescriptionBox = ({ icon, heading, description }) => (
    <div className={styles.floralDescriptionBox}>
        <div className={styles.floralName}>
            <img src={icon} alt="Flower Icon" className={styles.flowerIcon} />
            <p className={styles.floralHeading}>{heading}</p>
        </div>
        <p className={styles.floralDescription}>{description}</p>
    </div>
);

const CatalogSection = ({ image, description, marginTop }) => (
    <div className={styles.section} style={{ marginTop }}>
        <img src={image} alt="Bouquet-catalog" className={styles.catalogImage}/>
        <p className={styles.catalogDescription}>{description}</p>
    </div>
);

const HelperDescription = ({ icon, description }) => (
    <div className={styles.floralName}>
        <img src={icon} alt="Flower Icon" className={styles.flowerIcon} />
        <p className={styles.helperDescription + ' ' + styles.liftedText}>{description}</p>
    </div>
);

const Review = ({ review }) => (
    <div className={styles.reviewContainer}>
        <div className={styles.review}>
            <p className={styles.reviewText}>{review.body}</p>
            <p className={styles.reviewAuthor}>{review.email}</p>
        </div>
    </div>
);

function Home() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then(response => response.json())
            .then(data => {
                const translatedReviews = data.map(review => ({
                    ...review,
                    body: "Это отличный магазин цветов!",
                    email: "client@example.com"
                }));
                setReviews(translatedReviews);
            })
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    const floralServices = [
        { icon: lightgreenflower, heading: "Широкий выбор цветов", description: "От классических роз до экзотических орхидей" },
        { icon: lightgreenflower, heading: "Свежие букеты", description: "Мы создаем композиции на любой вкус и для любого случая" },
        { icon: lightgreenflower, heading: "Оригинальные подарки", description: "Цветочные корзины, композиции в шляпных коробках" },
        { icon: lightgreenflower, heading: "Профессиональные флористы", description: "Мы поможем вам создать идеальный букет и подобрать подходящий повод для его дарения" }
    ];

    const catalogSections = [
        { image: first, description: "Для особых случаев", marginTop: "-130px" },
        { image: second, description: "Для подарка без повода", marginTop: "0" },
        { image: third, description: "Акции и специальные предложения", marginTop: "-130px" },
        { image: forth, description: "Подарочные сертификаты", marginTop: "0" }
    ];

    const helperDescriptions = [
        { icon: whiteflower, description: "Рекомендации именно для вас и ваших близких" },
        { icon: whiteflower, description: "Консультация по текущим акциям" },
        { icon: whiteflower, description: "Знакомство и общение с брендом" }
    ];

    return (
        <div className={styles.home}>
            <div className={styles.shop}>
                <div className={styles.shopInfo}>
                    <p className={styles.welcomeMessage}>Добро пожаловать!</p>
                    <p className={styles.welcomeMessageHeading}>У нас вы найдете:</p>
                    <div className={styles.floralServicesSection}>
                        {floralServices.map((service, index) => (
                            <FloralDescriptionBox key={index} {...service} />
                        ))}
                    </div>
                </div>

                <img src={bouquet} alt="Bouquet" className={styles.bouquetImage} />

                <div className={styles.shopInfo} style={{ marginTop: '300px' }}>
                    <p className={styles.welcomeMessage}>Petals Whispers - это:</p>
                    <div className={styles.floralServicesSection}>
                        {floralServices.slice(0, 3).map((service, index) => (
                            <FloralDescriptionBox key={index} icon={pinkflower} {...service} />
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.catalog}>
                <div className={styles.list}>
                    <div className={styles.listInner}>
                        {catalogSections.map((section, index) => (
                            <CatalogSection key={index} {...section} />
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.helper}>
                <div className={styles.helperContent}>
                    <div className={styles.helperText}>
                        <div className={styles.helperHeading}>Персональный помощник</div>
                        {helperDescriptions.map((description, index) => (
                            <HelperDescription key={index} {...description} />
                        ))}
                    </div>
                    <img src={taylor} alt="Taylor" className={styles.helperImage} />
                    <div className={styles.helperText2}>
                        <p className={styles.helperDescription} style={{ fontWeight: "500", marginTop: "30px"  }}>БЕСПЛАТНО!</p>
                        <p className={styles.helperDescription} style={{ width: "300px" }}>Ежедневно с 9 до 21</p>
                        <p className={styles.helperDescription} style={{ fontWeight: "500", marginTop: "20px" }}>НА СВЯЗИ!</p>
                        <p className={styles.helperDescription}>Знает ответ на любой вопрос</p>
                    </div>
                    <button className={styles.contactButtonStyle}>Связаться</button>
                </div>
            </div>

            <div className={styles.reviewsSection}>
                <h2 className={styles.reviewsHeading} style={{ marginBottom: "30px" }}>Отзывы наших клиентов</h2>
                {reviews.map((review, index) => (
                    <Review key={index} review={review} />
                ))}
            </div>
        </div>
    );
}

export default Home;