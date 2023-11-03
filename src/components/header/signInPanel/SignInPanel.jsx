import './SignInPanel.css'
import { Link } from 'react-router-dom';

export default function SignInPanel() {
    return (
        <div className="header__signInPanel">
            <button className='button button_register'>Зарегистрироваться</button>
            <div className="header__vertical-line"></div>
            <Link className='link' to="/register"><button className='button button_signIn'>Войти</button></Link>
        </div>
    )
}   