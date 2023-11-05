import './SearchPage.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../hooks/AuthContext';
import React, { useContext } from "react";

export default function SearchPage() {

    const [errorInn, setErrorInn] = useState('');
    const [errorDate, setErrorDate] = useState('');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');

    const handleInputChange1 = (event) => {
        const value = event.target.value;
        setInput1(value);
        setErrorInn('');

        if (value !== '') {
            const innRegex = /^\d{10}$/;
            if (!innRegex.test(value)) {
                setErrorInn('Некорректный ИНН');
            }
        }
    };

    const handleInputChange2 = (event) => {
        const value = event.target.value;
        if (value === '' || (Number(value) >= 1 && Number(value) <= 1000)) {
            setInput2(value);
        }
    };

    const handleInputChange3 = (event) => {
        const selectedDate = new Date(event.target.value);
        const currentDate = new Date();

        if (selectedDate > currentDate) {
            setErrorDate('Выберите дату, которая прошла или сегодняшнюю дату');
        } else if (selectedDate > new Date(input4)) {
            setErrorDate('Дата начала не может быть позже даты конца');
        } else {
            setInput3(event.target.value);
            setErrorDate('');
        }
    };

    const handleInputChange4 = (event) => {
        const selectedDate = new Date(event.target.value);
        const currentDate = new Date();

        if (selectedDate > currentDate) {
            setErrorDate('Выберите дату, которая прошла или сегодняшнюю дату');
        } else if (selectedDate < new Date(input3)) {
            setErrorDate('Дата конца не может быть раньше даты начала');
        } else {
            setInput4(event.target.value);
            setErrorDate('');
        }
    };

    const isButtonDisabled = input1 === '' || input2 === '' || input3 === '' || input4 === '';

    return (

        <div className='searchPage'>
            <div className='container'>
                <div className='searchPage__content'>
                    <div className='searchPage__content-main'>
                        <h1 className='searchPage__content-main-heading'>Найдите необходимые<br /> данные в пару кликов.</h1>
                        <p className='searchPage__content-main-heading-txt'>Задайте параметры поиска.<br /> Чем больше заполните, тем точнее поиск</p>
                        <div className='searchPage__content-main-panel'>
                            <div className='searchPage__content-main-panel-wrapper'>
                                <div className='searchPage__content-main-panel-col'>
                                    <p className='searchPage__content-main-panel-txt' >ИНН компании*</p>
                                    <input className={`searchPage__input ${errorInn && 'error'}`} type="text" placeholder="10 цифр" value={input1} onChange={handleInputChange1} />
                                    {errorInn && <p className='searchPage__error'>{errorInn}</p>}
                                    <p className='searchPage__content-main-panel-txt'>Тональность</p>
                                    <select className='searchPage__select' name="" id="">
                                        <option value="">Позитивная</option>
                                        <option value="">Негативная</option>
                                        <option value="">Любая</option>
                                    </select>
                                    <p className='searchPage__content-main-panel-txt'>Количество документов в выдаче*</p>
                                    <input className='searchPage__input' type="number" placeholder="От 1 до 1000" value={input2} onChange={handleInputChange2} />
                                    <p className='searchPage__content-main-panel-txt'>Диапазон поиска*</p>
                                    <div className='searchPage__content-main-panel-row'>
                                        <input className={`searchPage__select ${errorDate && 'error'}`} type="date" id="datePicker" placeholder="Дата начала" value={input3} onChange={handleInputChange3} />
                                        <input className={`searchPage__select ${errorDate && 'error'}`} type="date" id="datePicker" placeholder="Дата конца" value={input4} onChange={handleInputChange4} />
                                        {errorDate && <p className='searchPage__errorDate'>{errorDate}</p>}
                                    </div>
                                </div>
                                <div className='searchPage__content-main-panel-col'>
                                    <div className='searchPage__content-main-panel-chekboxes'>
                                        <label className='checkbox-other'><input className='searchPage__checkbox' type="checkbox" /><span>Признак максимальной полноты</span></label><br />
                                        <label className='checkbox-other'><input className='searchPage__checkbox' type="checkbox" /><span>Упоминания в бизнес-контексте</span></label><br />
                                        <label className='checkbox-other'><input className='searchPage__checkbox' type="checkbox" /><span>Главная роль в публикации</span></label><br />
                                        <label className='checkbox-other'><input className='searchPage__checkbox' type="checkbox" /><span>Публикации только с риск-факторами</span></label><br />
                                        <label className='checkbox-other'><input className='searchPage__checkbox' type="checkbox" /><span>Включать технические новости рынков</span></label><br />
                                        <label className='checkbox-other'><input className='searchPage__checkbox' type="checkbox" /><span>Включать анонсы и календари</span></label><br />
                                        <label className='checkbox-other'><input className='searchPage__checkbox' type="checkbox" /><span>Включать сводки новостей</span></label><br />
                                    </div>
                                    <div className='searchPage__searchPanel'>
                                        <button className='searchPage__button' disabled={isButtonDisabled}>Поиск</button>
                                        <p className='searchPage__searchPanel-txt'>* Обязательные к заполнению поля</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='searchPage__content-img'>
                        <img className='searchPage__content-img-list' src="/assets/searchPage-list.png" alt="" />
                        <img className='searchPage__content-img-folders' src="/assets/searchPage-folders.png" alt="" />
                        <img src="/assets/searchPage_main-picture.png" alt="" />
                    </div>
                </div>

            </div>

        </div >
    )
}

