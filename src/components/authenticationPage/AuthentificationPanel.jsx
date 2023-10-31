import './AuthentificationPage.css'

export default function AuthentificationPanel() {
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
                    <input className='authentificationPanel__inpt' type="text" />
                    <p className='authentificationPanel__txt'>Пароль:</p>
                    <input className='authentificationPanel__inpt authentificationPanel__inpt_innactive' type="password" />
                </div>
                <div className='authentificationPanel__joinButtons'>
                    <button className='authentificationPanel__enter-Button'>Войти</button>
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