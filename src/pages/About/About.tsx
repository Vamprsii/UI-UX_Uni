import styles from './About.module.css';

function About() {
    return (
        <div className={styles.aboutUs}>
            <div className={styles.aboutHeader}>О нас</div>
            <div className={styles.aboutInfo}>
                <div className={styles.aboutBlock}>
                    <div className={styles.aboutDescription}>
                        <span className={styles.aboutHeadingStyle}>Добро пожаловать в Petal Flowers!</span>
                        <div className={styles.aboutText}>
                            <p>Меня зовут Юлия, и я создатель этого цветочного салона!</p>
                            <p>
                                С самого детства меня привлекали цветы и их необыкновенная красота. Они способны оживить
                                любой интерьер, поднять настроение и напомнить о прекрасном. Но, к сожалению, найти
                                по-настоящему свежие и стильные букеты, которые удовлетворяли бы всем моим потребностям
                                было очень трудно.
                            </p>
                            <p>
                                Тогда я и поняла, что хочу создать пространство, где каждый сможет найти идеальный букет
                                для себя или в подарок, начала мечтать о магазине, где царит атмосфера тепла и радости,
                                где каждый посетитель чувствует себя особенным, а цветы - это не просто товар, а настоящее искусство!
                            </p>
                            <p>
                                И вот, спустя долгие месяцы подготовки, Flower Petals готов радовать клиентов невероятными
                                букетами! Я рада делиться своей любовью к цветам с вами, помогать создавать незабываемые
                                моменты и дарить яркие эмоции!
                            </p>
                        </div>
                    </div>
                    <div className={styles.teamJoin}>
                        <p className={styles.teamJoinHeading}>Присоединиться к команде!</p>
                    </div>
                </div>
                <div className={styles.founderInfo}>
                    <img src="/src/assets/images/founder.png" className={styles.flowerAvatar} />
                    <div className={styles.founderInfoContainer}>
                        <p className={styles.founderText}>- Основатель бренда</p>
                        <p className={styles.founderName}>Полуян Юлия Александровна</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;