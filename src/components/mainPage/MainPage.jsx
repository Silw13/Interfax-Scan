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

                </section>  
            </div>
        </div>
    )
}   