import './MainPage.css'

const Tariffs = [{
    id: 0,
    tariffName: 'Beginner',
    description: 'Для небольшого исследования',
    price: '799',
    oldPrice: '1200',
    includes: ['Безлимитная история запросов', 'Безопасная сделка', 'Поддержка 24/7'],
    image: ""
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
        <div className='tariffs-blockItem'>
            <div className='tariffs-blockItem-header tariffs-blockItem-header_orange'>
                <div className='tariffs-blockItem-wrapper'>

                    <div className='tariffs-blockItem-headerTxt'>
                        <h3 className='tariffs__heading'>Beginner</h3>
                        <p className='tariffs__txt'>Для небольшого исследования</p>
                    </div>
                    <div className='tariffs-blockItem-headerImg'>
                        <img src="/assets/tariffs/beginner.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='tariffs-blockItem-main'>
                <div className='tariffs-blockItem-wrapper'>
                    <h3 className='heading_tariffs-h3'>799 ₽ <span className='heading_tariffs-h3 heading_tariffs-h3_disabled'>1 200 ₽</span></h3>
                    <p className='tariffs__txt'>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                    <p>В тариф входит</p>
                    <ul>
                        <li>Безлимитная история запросов</li>
                        <li>Безопасная сделка</li>
                        <li>Поддержка 24/7</li>
                    </ul>
                    <button>Перейти в личный кабинет</button>
                </div>
            </div>
        </div>
    )
}

export default function TariffsBlock() {
    return (
        <div className='tariffs-block'>
            <Tariff />
            <Tariff />
            <Tariff />
        </div>
    )
}
