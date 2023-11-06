import { useEffect, useState } from 'react';
import "./LimitCounter.css";
import { AuthContext } from '../../../hooks/AuthContext';
import React, { useContext } from "react";


export default function LimitCounter() {
    const [loading, setLoading] = useState(true);
    const [usedCompanyCount, setUsedCompanyCount] = useState(0);
    const [companyLimit, setCompanyLimit] = useState(0);
    const { accessToken } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/info', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application / json',
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                const data = await response.json();
                setUsedCompanyCount(data.eventFiltersInfo.usedCompanyCount);
                setCompanyLimit(data.eventFiltersInfo.companyLimit);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="header__limitCounter">
            <div className="header__limitCounter-wrapper">
                {loading ? (
                    <div className="header__limitCounter-loader">
                        <span className="loader"></span>
                    </div>
                ) : (<>
                    <div className="header__limitCounter-textBlock">
                        <p className="header__limitCounterText">Использовано компаний</p>
                        <p className="header__limitCounterText">Лимит по компаниям</p>

                    </div>
                    <div className="header__limitCounter-digitsBlock">
                        <p className="header__limitCounterDigits">{usedCompanyCount}</p>
                        <p className="header__limitCounterDigits header__limitCounterDigits_green">{companyLimit}</p>
                    </div>
                </>
                )}
            </div>
        </div>
    );
}