import { AuthContext } from '../../hooks/AuthContext';
import './Header.css'
import LimitCounter from './limitCounter/limitCounter'
import SignInPanel from './signInPanel/SignInPanel'
import UserMenu from './userMenu/UserMenu'
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react'


export default function Header() {
    const { isAuthenticated, setIsAuthenticated, setAccessToken } = useContext(AuthContext);
    const [isOpen, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(false)
    }

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        const isAuthenticated = localStorage.getItem("isAuthenticated");

        if (accessToken && isAuthenticated) {
            setAccessToken(accessToken);
            setIsAuthenticated(isAuthenticated);
        }
    }, []);



    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Link to="/"><img src='/assets/logo.svg' alt="Logo" className='header__logo' /></Link>
                    <nav className='header__nav'>
                        <ul className='header__nav-list'>
                            <li className='header__nav-list-item'><a href=""><Link to="/">Главная</Link></a></li>
                            <li className='header__nav-list-item'><a>Тарифы</a></li>
                            <li className='header__nav-list-item'><a>FAQ</a></li>
                        </ul>
                    </nav>
                    {isAuthenticated ? <div className='header__authorizedMenu'><LimitCounter /><UserMenu /></div> : <SignInPanel />}
                    <Hamburger color="#4FD1C5" toggled={isOpen} toggle={setOpen} onToggle={toggled => {
                        if (toggled) {
                            color = "#FFFFFF"
                        } else {
                            color = "#029491"
                        }
                    }} />
                    {isOpen && <div className='burger__menu'>
                        <img className='burger__menu-logo' src="" alt="" />
                        <ul className='burger__menu-ul'>
                            <li className='burger__menu-list-item'><a href=""><Link to="/">Главная</Link></a></li>
                            <li className='burger__menu-list-item'><a>Тарифы</a></li>
                            <li className='burger__menu-list-item'><a>FAQ</a></li>
                        </ul>
                        <div className='burger__menu-sigh-in'>
                            <p className='burger__menu-sigh-in-txt'>Зарегистрироваться</p>
                            <Link className='link' to="/register">
                            <button onClick={handleClick} className='burger__menu-sigh-in-button'>Войти</button>
                            </Link>
                        </div>
                    </div>}

                </div>
            </div>
        </header>
    )
}   