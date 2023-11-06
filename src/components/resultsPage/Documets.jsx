import './ResultsPage.css'
import React, { useContext } from "react";
import { useEffect, useState } from 'react';
import { AuthContext } from '../../hooks/AuthContext';
import { RequestContext } from '../../hooks/SearchContext';

export default function Documents() {
    const { requestData } = useContext(RequestContext);
    const { accessToken } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [documentsId, setDocumentsId] = useState([]);
    const [visibleDocuments, setvisibleDocuments] = useState(0);
    const [documentsList, setDocumentsList] = useState([]);
    const regex = /<[^>]*>/g;
    const regex2 = /&[^;]+;/g;



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://gateway.scan-interfax.ru/api/v1/objectsearch', {
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
                setDocumentsId(data);
                // console.log(documentsId.items.length)

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleShowMore = () => {
        if (documentsId.items.length - visibleDocuments > 10) {
            setvisibleDocuments(visibleDocuments + 10);
        } else {
            setvisibleDocuments(documentsId.items.length - visibleDocuments);
        }
        console.log(visibleDocuments);
    };

    useEffect(() => {
        if (documentsId.items) {
            documentsId.items.length < 10 ? setvisibleDocuments(documentsId.items.length) : setvisibleDocuments(10);
        }
    }, [documentsId]);



    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const combinedData = [];
                for (let i = 0; i < visibleDocuments; i++) {
                    const id = documentsId.items[i].encodedId;
                    const response = await fetch(
                        'https://gateway.scan-interfax.ru/api/v1/documents',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                Accept: 'application/json',
                                Authorization: `Bearer ${accessToken}`,
                            },
                            body: JSON.stringify({
                                ids: [id],
                            }),
                        }
                    );
                    const data = await response.json();
                    combinedData.push(...data);
                }

                setDocumentsList(combinedData);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDocuments();
    }, []);



    return (
        <>
            <div className='resultsPage__documents'>
                {documentsList.map(item => (
                    <div className='resultsPage__document' key={item.id}>
                        <div className='resultsPage__document-wrapper'>
                            <div className='resultsPage__document-header'>
                                <div className='resultsPage__document-header-info'>
                                    <span className='resultsPage__document-header-info-txt'>{new Date(item.ok.issueDate).toLocaleDateString('ru-RU')}</span>
                                    <span className='resultsPage__document-header-info-txt'><a className='resultsPage__document-header-info-txt' href={item.ok.url}>{item.ok.source.name}</a></span>
                                </div>
                                <div className='resultsPage__document-header-main'>
                                    <h3 className='resultsPage__document-header-main-h3'>{item.ok.title.text}</h3>
                                    <div className='resultsPage__document-header-main-tags'>
                                        {item.ok.attributes.isTechNews ? <div className='resultsPage__document-header-main-tag'>Технические новости</div> : ''}
                                        {item.ok.attributes.isAnnouncement ? <div className='resultsPage__document-header-main-tag'>Анонсы и события</div> : ''}
                                        {item.ok.attributes.isDigest ? <div className='resultsPage__document-header-main-tag'>Сводки новостей</div> : ''}
                                    </div>
                                </div>
                            </div>
                            <div className='resultsPage__document-content'>
                                <img className='resultsPage__document-content-img' src="https://placehold.co/581x158" alt="" />
                                <p className='resultsPage__document-content-txt'>{item.ok.content.markup.replace(regex, '').replace(regex2, '')}</p>
                            </div>
                            <div className='resultsPage__document-footer'>
                                <a href={item.ok.url}><button className='resultsPage__document-footer-button'>Читать в источнике</button></a>
                                <div className='resultsPage__document-footer-cntr'><span>{item.ok.content.markup.replace(regex, '').replace(regex2, '').trim().split(/\s+/).length} слова</span></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='resultsPage__center'>
                <button className='resultsPage__button' onClick={handleShowMore}>Показать больше</button>
            </div>
        </>
    )

}