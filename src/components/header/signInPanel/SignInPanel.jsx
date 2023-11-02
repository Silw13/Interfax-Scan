import './SignInPanel.css'
import { Link } from 'react-router-dom';

export default function SignInPanel() {
    return (
        <div className="header__signInPanel">
            <button className='button button_register'>Зарегистрироваться</button>
            <div className="header__vertical-line"></div>
            <button className='button button_signIn'><Link className='link' to="/register">Войти</Link></button>
        </div>
    )
}   