import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__content'>
                    <img className='footer__logo' src="/assets/logo_white.png" alt="" />
                    <div className='footer__content-txt'>
                        <p>г. Москва, Цветной б-р, 40</p>
                        <p>+7 495 771 21 11</p>
                        <p>info@skan.ru</p>
                        <p className='footer__copyright'>Copyright. 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}