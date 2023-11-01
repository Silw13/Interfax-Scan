import './SearchPage.css'

export default function SearchPage() {
    return (

        <div className='searchPage'>
            <div className='container'>
                <div className='searchPage__content'>
                    <div className='searchPage__content-main'>
                        <h1 className='searchPage__content-main-heading'>Найдите необходимые<br /> данные в пару кликов.</h1>
                        <p className='searchPage__content-main-heading-txt'>Задайте параметры поиска.<br /> Чем больше заполните, тем точнее поиск</p>
                        <div className='searchPage__content-main-panel'>
                            <div className='searchPage__content-main-panel-wrapper'>
                                <div className='searchPage__content-main-panel-col'>
                                    <p className='searchPage__content-main-panel-txt'>ИНН компании*</p>
                                    <input className='searchPage__input' type="text" placeholder="10 цифр" />
                                    <p className='searchPage__content-main-panel-txt'>Тональность</p>
                                    <select className='searchPage__select' name="" id="">
                                        <option value="">Тональность 1</option>
                                        <option value="">Тональность 2</option>
                                        <option value="">Тональность 3</option>
                                    </select>
                                    <p className='searchPage__content-main-panel-txt'>Количество документов в выдаче*</p>
                                    <input className='searchPage__input' type="text" placeholder="От 1 до 1000" />
                                    <p className='searchPage__content-main-panel-txt'>Диапазон поиска*</p>
                                    <div className='searchPage__content-main-panel-row'>
                                        <select className='searchPage__select' name="" id="">
                                            <option value="">Тональность 1</option>
                                            <option value="">Тональность 2</option>
                                            <option value="">Тональность 3</option></select>

                                        <select className='searchPage__select' name="" id="">
                                            <option value="">Тональность 1</option>
                                            <option value="">Тональность 2</option>
                                            <option value="">Тональность 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='searchPage__content-main-panel-col'>
                                    <div className='searchPage__content-main-panel-chekboxes'>
                                        <label className='checkbox-other'><input className='searchPage__checkbox' type="checkbox" /><span>Признак максимальной полноты</span></label><br />
                                        <label className='checkbox-other'><input className='searchPage__checkbox' type="checkbox" /><span>Упоминания в бизнес-контексте</span></label><br />
                                        <label className='checkbox-other'><input className='searchPage__checkbox' type="checkbox" /><span>Главная роль в публикации</span></label><br />
                                        <label className='checkbox-other'><input className='searchPage__checkbox' type="checkbox" /><span>Публикации только с риск-факторами</span></label><br />
                                        <label className='checkbox-other'><input className='searchPage__checkbox' type="checkbox" /><span>Включать технические новости рынков</span></label><br />
                                        <label className='checkbox-other'><input className='searchPage__checkbox' type="checkbox" /><span>Включать анонсы и календари</span></label><br />
                                        <label className='checkbox-other'><input className='searchPage__checkbox' type="checkbox" /><span>Включать сводки новостей</span></label><br />
                                    </div>
                                    <div className='searchPage__searchPanel'>
                                        <button className='searchPage__button'>Поиск</button>
                                        <p className='searchPage__searchPanel-txt'>* Обязательные к заполнению поля</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='searchPage__content-img'>
                        <img className='searchPage__content-img-list' src="/assets/searchPage-list.png" alt="" />
                        <img className='searchPage__content-img-folders' src="/assets/searchPage-folders.png" alt="" />
                        <img src="/assets/searchPage_main-picture.png" alt="" />
                    </div>
                </div>

            </div>

        </div >
    )
}

