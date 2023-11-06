import './AuthentificationPage.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../hooks/AuthContext';
import React, { useContext } from "react";


export default function AuthentificationPanel() {

    const { accessToken } = useContext(AuthContext);

    const { isAuthenticated, setIsAuthenticated, setAccessToken } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const handleInputChange1 = (event) => {
        setInput1(event.target.value);
        setError('');
    };

    const handleInputChange2 = (event) => {
        setInput2(event.target.value);
        setError('');
    };

    const isButtonDisabled = input1 === '' || input2 === '';

    const navigate = useNavigate();

    const handleClick = async () => {
        const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application / json'
            },
            body: JSON.stringify({
                "login": input1,
                "password": input2
            })
        });

        const data = await response.json();

        if (response.ok) {
            const { accessToken } = data;
            setAccessToken(accessToken);
            setIsAuthenticated(true);
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('isAuthenticated', true);
            navigate("/search");

        } else {
            setError('Неправильный логин или пароль');
            console.log(data.error);
        }
    };

    return (
        <div className='authentificationPanel'>
            <div className='authentificationPanel__wrapper'>
                <div className='authentificationPanel__header'>
                    <img className='lock' src="/assets/lock.svg" alt="" />
                    <button className='authentificationPanel__header-enter'>Войти</button>
                    <button className='authentificationPanel__header-register'>Зарегистрироваться</button>
                </div>
                <div className='authentificationPanel__inputPanel'>
                    <p className='authentificationPanel__txt'>Логин или номер телефона:</p>
                    <input className={`authentificationPanel__inpt ${error && 'error'}`} type="text" value={input1} onChange={handleInputChange1} />

                    <p className={`authentificationPanel__txt_small ${error && 'error'}`}>{error}</p>

                    <p className='authentificationPanel__txt'>Пароль:</p>
                    <input className={`authentificationPanel__inpt ${error && 'error'}`} type="password" value={input2} onChange={handleInputChange2} />

                    <p className={`authentificationPanel__txt_small ${error && 'error'}`}>{error}</p>

                </div>
                <div className='authentificationPanel__joinButtons'>

                    <button className='authentificationPanel__enter-Button' disabled={isButtonDisabled} onClick={handleClick}>Войти</button>

                    <button className='authentificationPanel__restorePassword'>Восстановить пароль</button>
                </div>
                <div>
                    <p className='authentificationPanel__txt'>Войти через:</p>
                    <div className='authentificationPanel__joinWith'>
                        <button className='authentificationPanel__button-joinWith'><img src="/assets/authenticationWays_logo/Google_logo.svg" alt="" /></button>
                        <button className='authentificationPanel__button-joinWith'><img src="/assets/authenticationWays_logo/FB_logo.svg" alt="" /></button>
                        <button className='authentificationPanel__button-joinWith'><img src="/assets/authenticationWays_logo/Yandex_logo.svg" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}