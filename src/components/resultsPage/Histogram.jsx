import './ResultsPage.css'
import { AuthContext } from '../../hooks/AuthContext';
import { RequestContext } from '../../hooks/SearchContext';
import React, { useContext } from "react";
import { useEffect, useState } from 'react';


export default function Histogram() {
    const { requestData } = useContext(RequestContext);
    const { accessToken } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [totalDocuments, setTotalDocuments] = useState(0);
    const [dataHist, setDataHist] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                    body: JSON.stringify({
                        issueDateInterval: {
                            startDate: requestData.startDate,
                            endDate: requestData.endDate
                        },
                        searchContext: {
                            targetSearchEntitiesContext: {
                                targetSearchEntities: [
                                    {
                                        type: "company",
                                        sparkId: null,
                                        entityId: null,
                                        inn: requestData.inn,
                                        maxFullness: requestData.checkbox1Checked,
                                        inBusinessNews: requestData.checkbox2Checked
                                    }
                                ],
                                onlyMainRole: requestData.checkbox3Checked,
                                onlyWithRiskFactors: requestData.checkbox4Checked,
                                riskFactors: {
                                    and: [],
                                    or: [],
                                    not: []
                                },
                                themes: {
                                    and: [],
                                    or: [],
                                    not: []
                                }
                            },
                            themesFilter: {
                                and: [],
                                or: [],
                                not: []
                            }
                        },
                        searchArea: {
                            includedSources: [],
                            excludedSources: [],
                            includedSourceGroups: [],
                            excludedSourceGroups: []
                        },
                        attributeFilters: {
                            excludeTechNews: requestData.checkbox5Checked,
                            excludeAnnouncements: requestData.checkbox6Checked,
                            excludeDigests: requestData.checkbox7Checked
                        },
                        similarMode: "duplicates",
                        limit: requestData.limit,
                        sortType: "sourceInfluence",
                        sortDirectionType: "desc",
                        intervalType: "month",
                        histogramTypes: [
                            "totalDocuments",
                            "riskFactors"
                        ]
                    })
                });
                const data = await response.json();
                console.log(data)
                

                let totalDocumentsCount = 0;
                const totalDocumentsData = data.data.find(item => item.histogramType === 'totalDocuments');
                totalDocumentsCount = totalDocumentsData.data.reduce((total, item) => total + item.value, 0);

                setTotalDocuments(totalDocumentsCount)
                setDataHist(data.data);
                setLoading(false);

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='resultsPage__histogram'>
            <p className='resultsPage__histogram-txt'>Найдено {totalDocuments} вариантов</p>
            {loading ? (
                <div className="histogram-loader">
                    <span className="">Загружаем данные</span>
                    <span className="loader"></span>
                </div>
            ) : (
                <>
                    {dataHist.map(item => {
                        if (item.histogramType === "totalDocuments") {
                            return (
                                <div className='histogramTable' key={item.histogramType}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='histogramTD green'>Период</td>
                                                {item.data.map(dataItem => (
                                                    <td className='histogramTD' key={dataItem.date}>
                                                        <p>{new Date(dataItem.date).toLocaleDateString('ru-RU')}</p>
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td className='histogramTD green'>Всего</td>
                                                {item.data.map(dataItem => (
                                                    <td className='histogramTD histogramTD-border' key={dataItem.date}>
                                                        <p>{dataItem.value}</p>
                                                    </td>
                                                ))}
                                            </tr>
                                            {dataHist.map(item => {
                                                if (item.histogramType === "riskFactors") {
                                                    return (
                                                        <tr key={item.histogramType}>
                                                            <td className='histogramTD green'>Риски</td>
                                                            {item.data.map(dataItem => (
                                                                <td className='histogramTD' key={dataItem.date}>
                                                                    <p>{dataItem.value}</p>
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            );
                        }
                        return null;
                    })}
                </>
            )}
        </div>
    );
};
