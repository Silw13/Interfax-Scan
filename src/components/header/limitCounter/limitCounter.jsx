import "./LimitCounter.css"

export default function LimitCounter() {
    return (
        <div className="header__limitCounter">
            <div className="header__limitCounter-wrapper">
                <div className="header__limitCounter-textBlock" >
                    <p className="header__limitCounterText">Использовано компаний</p>
                    <p className="header__limitCounterText">Лимит по компаниям</p>
                </div>
                <div className="header__limitCounter-digitsBlock" >
                    <p className="header__limitCounterDigits">34</p>
                    <p className="header__limitCounterDigits header__limitCounterDigits_green">100</p>
                </div>
            </div>
        </div>
    )
}