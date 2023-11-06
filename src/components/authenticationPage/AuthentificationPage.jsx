import './AuthentificationPage.css'
import AuthentificationPanel from './AuthentificationPanel.jsx'


export default function AuthentificationPage() {
    return (
        <div className='authentificationPage'>
            <div className='container'>
                <div className='authentificationPage__content'>
                    <div className='authentificationPage__img'>
                        <h1 className='authentificationPage__heading'>Для оформления подписки <br />на тариф, необходимо<br /> авторизоваться.</h1>
                        <img src="/assets/authenticationPage_Characters.png" alt="" />
                    </div>
                    <AuthentificationPanel />
                    <img className='img-mob'src="/assets/authenticationPage_Characters.png" alt="" />
                </div>
                
            </div>
        </div>
    )
}