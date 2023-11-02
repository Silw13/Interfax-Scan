import './ResultsPage.css'

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
                    <p className='resultsPage__histogram-txt'>Найдено 4 221 вариантов</p>
                    <div>PLACEHOLDER</div>
                </div>

                <div className='resultsPage__documentsList'>
                    <h2 className='resultsPage__documentsList-h2'>Список документов</h2>
                    <div className='resultsPage__documentsList-flex'>
                        <div>PLACEHOLDER</div>
                        <div>PLACEHOLDER</div>
                    </div>
                    <div className='resultsPage__center'>
                        <button className='resultsPage__button'>Показать больше</button>
                    </div>
                </div>

            </div>
        </div>
    )
}