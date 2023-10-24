import './SignInPanel.css'

export default function SignInPanel() {
    return (
        <div className="header__signInPanel">
            <button className='button button_register'>Зарегистрироваться</button>
            <div className="header__vertical-line"></div>
            <button className='button button_signIn'>Войти</button>
        </div>
    )
}