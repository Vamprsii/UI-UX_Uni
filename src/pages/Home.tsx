import '/src/styles/Home.css';
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
    <div className="floral-description-box">
        <div className='floral-name'>
            <img src={icon} alt="Flower Icon" className="flower-icon" />
            <p className="floral-heading">{heading}</p>
        </div>
        <p className="floral-description">{description}</p>
    </div>
);

const CatalogSection = ({ image, description, marginTop }) => (
    <div className='section' style={{ marginTop }}>
        <img src={image} alt="Bouquet-catalog" className='catalog-image'/>
        <p className="catalog-description">{description}</p>
    </div>
);

const HelperDescription = ({ icon, description }) => (
    <div className='floral-name'>
        <img src={icon} alt="Flower Icon" className="flower-icon" />
        <p className="helper-description lifted-text">{description}</p>
    </div>
);

function Home() {
    return (
        <div className='home'>
            <div className='shop'>
                <div className='shop-info'>
                    <p className="welcome-message">Добро пожаловать!</p>
                    <p className="welcome-message-heading">У нас вы найдете:</p>
                    <div className="floral-services-section">
                        <FloralDescriptionBox
                            icon={lightgreenflower}
                            heading="Широкий выбор цветов"
                            description="От классических роз до экзотических орхидей"
                        />
                        <FloralDescriptionBox
                            icon={lightgreenflower}
                            heading="Свежие букеты"
                            description="Мы создаем композиции на любой вкус и для любого случая"
                        />
                        <FloralDescriptionBox
                            icon={lightgreenflower}
                            heading="Оригинальные подарки"
                            description="Цветочные корзины, композиции в шляпных коробках"
                        />
                        <FloralDescriptionBox
                            icon={lightgreenflower}
                            heading="Профессиональные флористы"
                            description="Мы поможем вам создать идеальный букет и подобрать подходящий повод для его дарения"
                        />
                    </div>
                </div>

                <img src={bouquet} alt="Bouquet" className='bouquet-image' />

                <div className='shop-info' style={{ marginTop: '300px' }}>
                    <p className="welcome-message">Petals Whispers - это:</p>
                    <div className="floral-services-section">
                        <FloralDescriptionBox
                            icon={pinkflower}
                            heading="Качество"
                            description="Мы работаем только со свежими и качественными цветами"
                        />
                        <FloralDescriptionBox
                            icon={pinkflower}
                            heading="Красота"
                            description="Мы создаем букеты, которые радуют глаз и дарят эмоции"
                        />
                        <FloralDescriptionBox
                            icon={pinkflower}
                            heading="Удобство"
                            description="Мы предлагаем удобные способы заказа и доставки"
                        />
                    </div>
                </div>
            </div>

            <div className='catalog'>
                <div className='list'>
                    <div className='list-inner'>
                        <CatalogSection image={first} description="Для особых случаев" marginTop="-130px" />
                        <CatalogSection image={second} description="Для подарка без повода" marginTop="0" />
                        <CatalogSection image={third} description="Акции и специальные предложения" marginTop="-130px" />
                        <CatalogSection image={forth} description="Подарочные сертификаты" marginTop="0"/>
                    </div>
                </div>
            </div>

            <div className='helper'>
                <div className='helper-content'>
                    <div className='helper-text'>
                        <div className='helper-heading'>Персональный помощник</div>
                        <HelperDescription icon={whiteflower} description="Рекомендации именно для вас и ваших близких" />
                        <HelperDescription icon={whiteflower} description="Консультация по текущим акциям" />
                        <HelperDescription icon={whiteflower} description="Знакомство и общение с брендом" />
                    </div>
                    <img src={taylor} alt="Taylor" className='helper-image' />
                    <div className='helper-text-2'>
                        <p className="helper-description" style={{ fontWeight: "500", marginTop: "30px"  }}>БЕСПЛАТНО!</p>
                        <p className="helper-description" style={{ width: "300px" }}>Ежедневно с 9 до 21</p>
                        <p className="helper-description" style={{ fontWeight: "500", marginTop: "20px" }}>НА СВЯЗИ!</p>
                        <p className="helper-description">Знает ответ на любой вопрос</p>
                    </div>
                    <button className="contact-button-style">Связаться</button>
                </div>
            </div>
        </div>
    );
}

export default Home;