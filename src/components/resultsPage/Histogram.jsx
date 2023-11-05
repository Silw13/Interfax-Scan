import './ResultsPage.css'
import { AuthContext } from '../../hooks/AuthContext';
import { RequestContext } from '../../hooks/SearchContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext } from "react";

export default function Histogram() {
    const { requestData } = useContext(RequestContext);
    const { accessToken } = useContext(AuthContext);
    return (
        <div className='resultsPage__histogram'>
            <p className='resultsPage__histogram-txt'>Найдено 4 221 вариантов</p>
        </div>
    )
} 