import "./UserMenu.css"

export default function UserMenu() {
    

    return (
        <div className="header__userMenu">
            <div className="header__userMenu-interface">
                <p className="header__userName">Алексей А.</p>
                <button  className="button button_exit">Выйти</button>
            </div>
            <div className="header__avatar"> <img src="/assets/user_avatar.png" alt="" /></div>
        </div>
    )
}