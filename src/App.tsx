import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Operation from './pages/Operation'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/operations" element={<Operation />} />
        </Routes>
    </Router>
    </>
  )
}

export default App