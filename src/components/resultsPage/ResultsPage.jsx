import Documents from './Documets.jsx'
import './ResultsPage.css'
import Histogram from './histogram.jsx'

export default function ResultsPage() {
    return (
        <div>
            <div className='container'>
                <div className='resultsPage__heading'>
                    <div className='resultsPage__heading-col'>
                        <h1 className='resultsPage__heading-h1'>Ищем. Скоро <br /> будут результаты</h1>
                        <p className='resultsPage__heading-txt'>Поиск может занять некоторое время,<br /> просим сохранять терпение.</p>
                    </div>
                    <img src="/assets/resultsPage-main-picture.png" alt="" />
                </div>

                <div className='resultsPage__histogram'>
                    <h2 className='resultsPage__histogram-h2'>Общая сводка</h2>
                    <Histogram />
                    <div className='resultsPage__documentsList'>
                        <h2 className='resultsPage__documentsList-h2'>Список документов</h2>
                        <div className='resultsPage__documentsList-flex'>
                            <Documents />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}