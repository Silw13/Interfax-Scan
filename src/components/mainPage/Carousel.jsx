import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainPage.css"

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="/assets/icons/next-icon.svg"
            className={className}
            style={{ ...style, display: "block", height: 39, width: 39 }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src="/assets/icons/prev-icon.svg"
            className={className}
            style={{ ...style, display: "block", height: 39, width: 39 }}
            onClick={onClick}
        />
    );
}

export default function SimpleSlider() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    };
    return (
        <Slider {...settings}>
            <div className="slider-item">
                <div className="slider-item-wrapper">
                    <img className="slider-item-img" src="/assets/icons/clock-icon.svg" alt="" />
                    <p className="slider-item-txt">Высокая и оперативная скорость обработки заявки</p>
                </div>
            </div>

            <div className="slider-item">
                <div className="slider-item-wrapper">
                    <img className="slider-item-img" src="/assets/icons/zoom-icon.svg" alt="" />
                    <p className="slider-item-txt">Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
                </div>
            </div>
            <div className="slider-item">
                <div className="slider-item-wrapper">
                    <img className="slider-item-img" src="/assets/icons/shield-icon.svg" alt="" />
                    <p className="slider-item-txt">Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>
                </div>
            </div>
            <div className="slider-item">
                <div className="slider-item-wrapper">
                    <img className="slider-item-img" src="/assets/icons/clock-icon.svg" alt="" />
                    <p className="slider-item-txt">Высокая и оперативная скорость обработки заявки</p>
                </div>
            </div>
        </Slider>
    );
}