import { useState } from 'react'
import Header from './components/header/header.jsx'
import MainPage from './components/mainPage/mainPage.jsx'
import Footer from './components/footer/Footer.jsx'
import AuthentificationPage from './components/authenticationPage/AuthentificationPage.jsx'
import SearchPage from './components/searchPage/SearchPage.jsx'
import ResultsPage from './components/resultsPage/ResultsPage.jsx'

function App() {

  return (
    <>
      <Header />
      {/* <MainPage /> */}
      {/* <AuthentificationPage /> */}
      {/* <SearchPage /> */}
      <ResultsPage />
      <Footer />
    </>
  )
}

export default App
