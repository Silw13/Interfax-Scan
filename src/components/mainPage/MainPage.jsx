import SimpleSlider from './Carousel'
import './MainPage.css'

export default function MainPage() {

    return (
        <div className="mainPage">
            <div className='container'>
                <section className='mainPage__mainPicture'>
                    <div className='mainPage__mainPicture-text'>
                        <h1 className='heading heading_h1'>сервис по поиску публикаций<br />о компании<br /> по его ИНН</h1>
                        <p>Комплексный анализ публикаций, получение данных<br /> в формате PDF на электронную почту.</p>
                        <button className='button button-standart'>Запросить данные</button>
                    </div>
                    <div className='mainPage__mainPicture-img'>
                        <img src="/assets/main_main-picture.png" alt="Главная картинка" />
                    </div>
                </section>
                <section className='mainPage__carousel'>
                    <h2 className='heading heading_mainPage-h2'>Почему именно мы</h2>
                    <SimpleSlider />
                    <img className='mainPage__secondaryPicture' src="/assets/main_secondary-picture.png" alt="Второстепенная картинка" />
                </section>
                <section className='mainPage__tariffs'>
                    <h2 className='heading heading_mainPage-h2'>Наши тарифы</h2>
                    <div className='tariffs-block'>

                        <div className='tariffs-blockItem'>
                            <div className='tariffs-blockItem-header tariffs-blockItem-header_orange'>
                                <div className='tariffs-blockItem-wrapper'>

                                    <div className='tariffs-blockItem-headerTxt'>
                                        <h3 className='tariffs__heading'>Beginner</h3>
                                        <p className='tariffs__txt'>Для небольшого исследования</p>
                                    </div>
                                    <div className='tariffs-blockItem-headerImg'>
                                        <img src="/assets/tariffs/beginner.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='tariffs-blockItem-main'>
                                <div className='tariffs-blockItem-wrapper'>
                                    <h3>799 ₽ <span>1 200 ₽</span></h3>
                                    <p className='tariffs__txt'>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                                    <p>В тариф входит</p>
                                    <ul>
                                        <li>Безлимитная история запросов</li>
                                        <li>Безопасная сделка</li>
                                        <li>Поддержка 24/7</li>
                                    </ul>
                                    <button>Перейти в личный кабинет</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}   