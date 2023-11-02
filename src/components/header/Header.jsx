import { AuthContext } from '../../hooks/AuthContext';
import './Header.css'
import LimitCounter from './limitCounter/limitCounter'
import SignInPanel from './signInPanel/SignInPanel'
import UserMenu from './userMenu/UserMenu'
import React, { useContext } from "react";
import { Link } from 'react-router-dom';



export default function Header() {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <img src='/assets/logo.svg' alt="Logo" className='header__logo' />
                    <nav className='header__nav'>
                        <ul className='header__nav-list'>
                            <li className='header__nav-list-item'><a href=""><Link to="/">Главная</Link></a></li>
                            <li className='header__nav-list-item'><a href="">Тарифы</a></li>
                            <li className='header__nav-list-item'><a href="">FAQ</a></li>
                        </ul>
                    </nav>
                    {isAuthenticated ? <div className='header__authorizedMenu'><LimitCounter /><UserMenu /></div> : <SignInPanel />}
                </div>
            </div>
        </header>
    )
}   