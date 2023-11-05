import { useState } from 'react'
import Header from './components/header/header.jsx'
import MainPage from './components/mainPage/mainPage.jsx'
import Footer from './components/footer/Footer.jsx'
import AuthentificationPage from './components/authenticationPage/AuthentificationPage.jsx'
import SearchPage from './components/searchPage/SearchPage.jsx'
import ResultsPage from './components/resultsPage/ResultsPage.jsx'
import { AuthProvider } from './hooks/AuthContext.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RequestProvider } from './hooks/SearchContext.jsx'

function App() {

  return (
    <Router>
      <AuthProvider>
        <RequestProvider>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<AuthentificationPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
          <Footer />
        </RequestProvider>
      </AuthProvider>
    </Router>
  )
}

export default App