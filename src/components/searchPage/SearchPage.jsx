import './SearchPage.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../hooks/AuthContext';
import { RequestContext } from '../../hooks/SearchContext';
import React, { useContext } from "react";

export default function SearchPage() {

    const { requestData, setRequestData } = useContext(RequestContext);
    const navigate = useNavigate();
    const [errorInn, setErrorInn] = useState('');
    const [errorDate, setErrorDate] = useState('');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    const [checkbox2Checked, setCheckbox2Checked] = useState(false);
    const [checkbox3Checked, setCheckbox3Checked] = useState(false);
    const [checkbox4Checked, setCheckbox4Checked] = useState(false);
    const [checkbox5Checked, setCheckbox5Checked] = useState(false);
    const [checkbox6Checked, setCheckbox6Checked] = useState(false);
    const [checkbox7Checked, setCheckbox7Checked] = useState(false);


    const handleInputChange1 = (event) => {
        setRequestData((prevData) => ({
            ...prevData,
            inn: event.target.value
        }));
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
        setRequestData((prevData) => ({
            ...prevData,
            limit: event.target.value
        }));
        const value = event.target.value;
        if (value === '' || (Number(value) >= 1 && Number(value) <= 1000)) {
            setInput2(value);
        }
    };

    const handleInputChange3 = (event) => {
        const selectedDate = new Date(event.target.value);
        const currentDate = new Date();
        setRequestData((prevData) => ({
            ...prevData,
            startDate: event.target.value
        }));

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
        setRequestData((prevData) => ({
            ...prevData,
            endDate: event.target.value
        }));

        if (selectedDate > currentDate) {
            setErrorDate('Выберите дату, которая прошла или сегодняшнюю дату');
        } else if (selectedDate < new Date(input3)) {
            setErrorDate('Дата конца не может быть раньше даты начала');
        } else {
            setInput4(event.target.value);
            setErrorDate('');
        }
    };

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;

        let type = "";
        if (selectedValue === "Позитивная") {
            type = "positive";
        } else if (selectedValue === "Негативная") {
            type = "negative";
        } else if (selectedValue === "Любая") {
            type = "any";
        }

        setRequestData({ ...requestData, type: type });
    };

    const isButtonDisabled = input1 === '' || input2 === '' || input3 === '' || input4 === '';

    const handleClick = () => {
        setRequestData({
            ...requestData,
            checkbox1Checked: checkbox1Checked,
            checkbox2Checked: checkbox2Checked,
            checkbox3Checked: checkbox3Checked,
            checkbox4Checked: checkbox4Checked,
            checkbox5Checked: checkbox5Checked,
            checkbox6Checked: checkbox6Checked,
            checkbox7Checked: checkbox7Checked,
            buttonClicked: true,

        });
        navigate("/results");
        console.log(requestData);
    };

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
                                    <select className='searchPage__select' onChange={handleSelectChange} name="" id="">
                                        <option value="Позитивная">Позитивная</option>
                                        <option value="Негативная">Негативная</option>
                                        <option value="Любая">Любая</option>
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
                                        <label className='checkbox-other'>
                                            <input className='searchPage__checkbox' type="checkbox" checked={checkbox1Checked} onChange={() => setCheckbox1Checked(!checkbox1Checked)} />
                                            <span>Признак максимальной полноты</span>
                                        </label><br />
                                        <label className='checkbox-other'>
                                            <input className='searchPage__checkbox' type="checkbox" checked={checkbox2Checked} onChange={() => setCheckbox2Checked(!checkbox2Checked)} />
                                            <span>Упоминания в бизнес-контексте</span>
                                        </label><br />
                                        <label className='checkbox-other'>
                                            <input className='searchPage__checkbox' type="checkbox" checked={checkbox3Checked} onChange={() => setCheckbox3Checked(!checkbox3Checked)} />
                                            <span>Главная роль в публикации</span>
                                        </label><br />
                                        <label className='checkbox-other'>
                                            <input className='searchPage__checkbox' type="checkbox" checked={checkbox4Checked} onChange={() => setCheckbox4Checked(!checkbox4Checked)} />
                                            <span>Публикации только с риск-факторами</span>
                                        </label><br />
                                        <label className='checkbox-other'>
                                            <input className='searchPage__checkbox' type="checkbox" checked={checkbox5Checked} onChange={() => setCheckbox5Checked(!checkbox5Checked)} />
                                            <span>Исключать технические новости рынков</span>
                                        </label><br />
                                        <label className='checkbox-other'>
                                            <input className='searchPage__checkbox' type="checkbox" checked={checkbox6Checked} onChange={() => setCheckbox6Checked(!checkbox6Checked)} />
                                            <span>Исключать анонсы и календари</span>
                                        </label><br />
                                        <label className='checkbox-other'>
                                            <input className='searchPage__checkbox' type="checkbox" checked={checkbox7Checked} onChange={() => setCheckbox7Checked(!checkbox7Checked)} />
                                            <span>Исключать сводки новостей</span>
                                        </label><br />
                                    </div>
                                    <div className='searchPage__searchPanel'>
                                        <button className='searchPage__button' disabled={isButtonDisabled} onClick={handleClick}>Поиск</button>
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

