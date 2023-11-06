import './ResultsPage.css'
import { AuthContext } from '../../hooks/AuthContext';
import { RequestContext } from '../../hooks/SearchContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext } from "react";
import { useEffect, useState } from 'react';

export default function Histogram() {
    const { requestData } = useContext(RequestContext);
    const { accessToken } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [totalDocuments, setTotalDocuments] = useState(0);
    const [dataHist, setDataHist] = useState([]);
    const mock = [
        {
            data: [
                {
                    date: "2020-11-01T03:00:00+03:00",
                    value: 8
                },
                {
                    date: "2020-06-01T03:00:00+03:00",
                    value: 6
                }
            ],
            histogramType: "totalDocuments"
        },
        {
            data: [
                {
                    date: "2020-11-01T03:00:00+03:00",
                    value: 0
                },
                {
                    date: "2020-06-01T03:00:00+03:00",
                    value: 1
                }
            ],
            histogramType: "riskFactors"
        }
    ];
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

                let totalDocumentsCount = 0;
                const totalDocumentsData = data.data.find(item => item.histogramType === 'totalDocuments');
                totalDocumentsCount = totalDocumentsData.data.reduce((total, item) => total + item.value, 0);

                setTotalDocuments(totalDocumentsCount)
                setDataHist(data.data);
                setLoading(false);

            } catch (error) {
                console.error(error);
                setDataHist(mock)
                console.log(dataHist)
            }
        };

        fetchData();
    }, []);

    return (



        <div className='resultsPage__histogram'>
            {dataHist.map(item => {
                if (item.histogramType === "totalDocuments") {
                    return (
                        <div key={item.histogramType}>
                            <h3>{item.histogramType}</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        {item.data.map(dataItem => (
                                            <td key={dataItem.date}>
                                                <p>{dataItem.date}</p>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr>
                                        {item.data.map(dataItem => (
                                            <td key={dataItem.date}>
                                                <p>{dataItem.value}</p>
                                            </td>
                                        ))}
                                    </tr>
                                    {dataHist.map(item => {
                                        if (item.histogramType === "riskFactors") {
                                            return (
                                                <tr key={item.histogramType}>
                                                    {item.data.map(dataItem => (
                                                        <td key={dataItem.date}>
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
        </div>


    );
};
