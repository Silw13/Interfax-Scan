import "./UserMenu.css"
import { AuthContext } from '../../../hooks/AuthContext';
import React, { useContext } from "react";

export default function UserMenu() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const handleButtonClick = () => {
        setIsAuthenticated(false);
    };

    return (
        <div className="header__userMenu">
            <div className="header__userMenu-interface">
                <p className="header__userName">Алексей А.</p>
                <button onClick={handleButtonClick} className="button button_exit">Выйти</button>
            </div>
            <div className="header__avatar"> <img src="/assets/user_avatar.png" alt="" /></div>
        </div>
    )
}