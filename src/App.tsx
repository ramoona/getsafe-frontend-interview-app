import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Buyflow, { ProductIds } from './buyflow/Buyflow'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Routes>
          <Route
            path="/buy/insurance_dev"
            element={<Buyflow productId={ProductIds.devIns} />}
          />
          <Route
            path="/"
            element={
              <>
                <p>Welcome to Getsafe's Developer Insurance</p>
                <Link to="/buy/insurance_dev">Get started!</Link>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
