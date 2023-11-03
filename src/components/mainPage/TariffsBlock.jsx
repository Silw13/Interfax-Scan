import './MainPage.css';
import { AuthContext } from '../../hooks/AuthContext';
import React, { useContext } from "react";

const Tariffs = [{
    id: 0,
    tariffName: 'Beginner',
    description: 'Для небольшого исследования',
    price: '799',
    oldPrice: '1200',
    installment: 'или 150 ₽/мес. при рассрочке на 24 мес.',
    includes: ['Безлимитная история запросов', 'Безопасная сделка', 'Поддержка 24/7'],
    image: "beginner.svg",
    active: false,
    color: 'orange'
},
{
    id: 1,
    tariffName: 'Pro',
    description: 'Для HR и фрилансеров',
    price: '1299',
    oldPrice: '2600',
    installment: 'или 279 ₽/мес. при рассрочке на 24 мес.',
    includes: ['Все пункты тарифа Beginner', 'Экспорт истории', 'Рекомендации по приоритетам'],
    image: "pro.svg",
    active: false,
    color: 'turquoise'

},
{
    id: 2,
    tariffName: 'Business',
    description: 'Для корпоративных клиентов',
    price: '2379',
    oldPrice: '3700',
    installment: '',
    includes: ['Все пункты тарифа Pro', 'Безлимитное количество запросов', 'Приоритетная поддержка'],
    image: "business.svg",
    active: false,
    color: 'black'
}];



function Tariff(props) {

    return (
        <div className={`tariffs-blockItem ${props.active ? 'border_' + props.color : ''}`}>
            <div className={'tariffs-header tariffs-header_' + props.color}>
                <div className="tariffs-header__content">
                    <div>
                        <h3 className='tariffs__h3'>{props.tariffName}</h3>
                        <p className='tariffs-header__text'>{props.description}</p>
                    </div>
                    <div>
                        <img src={"/assets/tariffs/" + props.image} alt="" />
                    </div>
                </div>
            </div>
            <div className='tariffs-main'>
                <div className='tariffs-main__content'>
                    {props.active ? <div className='currectTariff-wrapper'><div className='currectTariff'><span>Текущий тариф</span></div></div> : ""}

                    <div>
                        <h3 className='tariffs-main__price'>{props.price + " ₽"}<span className='tariffs-main__price tariffs-main__price_disabled'>{props.oldPrice + " ₽"}</span></h3>
                        <p className='tariffs-main__text'>{props.installment}</p>
                    </div>
                    <div>
                        <p className='tariffs-main__list-heading'>В тариф входит:</p>
                        <ul className='tariffs-main__list'>
                            {props.includes.map((item, index) => (
                                <li key={index} className='tariffs-main__list-item'>{item}</li>
                            ))}
                        </ul>
                        {props.active ?
                            <button className='tariffs-main__button tariffs-main__button-innactive'>Перейти в личный кабинет</button> :
                            <button className='tariffs-main__button'>Подробнее</button>}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default function TariffsBlock() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className='tariffs-block'>
            {Tariffs.map((tariff) => (
                <Tariff key={tariff.id}
                    tariffName={tariff.tariffName}
                    description={tariff.description}
                    price={tariff.price}
                    oldPrice={tariff.oldPrice}
                    installment={tariff.installment}
                    includes={tariff.includes}
                    image={tariff.image}
                    active={isAuthenticated && tariff.id === 0 ? true : false}
                    color={tariff.color} />
            ))}
        </div>
    )
}