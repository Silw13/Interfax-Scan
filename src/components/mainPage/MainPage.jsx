import './MainPage.css'
import SimpleSlider from './Carousel'
import TariffsBlock from './TariffsBlock'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../hooks/AuthContext';
import React, { useContext } from "react";

export default function MainPage() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className="mainPage">
            <div className='container'>
                <section className='mainPage__mainPicture'>
                    <div className='mainPage__mainPicture-text'>
                        <h1 className='heading heading_h1'>сервис по поиску публикаций<br />о компании<br /> по его ИНН</h1>
                        <p>Комплексный анализ публикаций, получение данных<br /> в формате PDF на электронную почту.</p>
                        {isAuthenticated ? <button className='button button-standart'><Link className='button-standart-link' to="/search">Запросить данные</Link></button> : ('')}
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
                    <TariffsBlock />
                </section>
            </div>
        </div>
    )
}   