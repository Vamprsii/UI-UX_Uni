import '/src/styles/About.css';

function About() {
    return (
        <div className="about-us">
            <div className="about-header">О нас</div>
            <div className="about-info">
                <div className='about-block'>
                    <div className="about-description">
                        <span className="about-heading-style">Добро пожаловать в Petal Flowers!</span>
                        <div className="about-text">
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
                    <div className="team-join">
                        <p className="team-join-heading">Присоединиться к команде!</p>
                    </div>
                </div>
                <div className="founder-info">
                    <img src="/src/assets/images/founder.png" className="flower-avatar" />
                    <div className="founder-info-container">
                        <p className="founder-text">- Основатель бренда</p>
                        <p className="founder-name">Полуян Юлия Александровна</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;