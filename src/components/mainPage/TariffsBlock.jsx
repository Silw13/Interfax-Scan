import './MainPage.css'

const Tariffs = [{
    id: 0,
    tariffName: 'Beginner',
    description: 'Для небольшого исследования',
    price: '799',
    oldPrice: '1200',
    includes: ['Безлимитная история запросов', 'Безопасная сделка', 'Поддержка 24/7'],
    image: "",
},
{
    id: 1,
    tariffName: 'Pro',
    description: 'Для HR и фрилансеров',
    price: '1299',
    oldPrice: '2600',
    includes: ['Все пункты тарифа Beginner', 'Экспорт истории', 'Рекомендации по приоритетам'],
    image: ""
},
{
    id: 2,
    tariffName: 'Business',
    description: 'Для корпоративных клиентов',
    price: '2379',
    oldPrice: '3700',
    includes: ['Все пункты тарифа Pro', 'Безлимитное количество запросов', 'Приоритетная поддержка'],
    image: ""
}];

function Tariff() {
    return (
        <div className="tariffs-blockItem">
            <div className="tariffs-header tariffs-header_orange">
                <div className="tariffs-header__content">
                    <div>
                        <h3 className='tariffs__h3'>Beginner</h3>
                        <p className='tariffs-header__text'>Для небольшого исследования</p>
                    </div>
                    <div>
                        <img src="/assets/tariffs/beginner.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='tariffs-main'>
                <div className='tariffs-main__content'>
                    <div>
                        <h3 className='tariffs-main__price'>799 ₽<span className='tariffs-main__price tariffs-main__price_disabled'>1200 ₽</span></h3>
                        <p className='tariffs-main__text'>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                    </div>
                    <div>
                        <p>asdasd</p>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                        <button>Перейти в личный кабинет</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default function TariffsBlock() {
    return (
        <div className='tariffs-block'>
            <Tariff />
        </div>
    )
}
