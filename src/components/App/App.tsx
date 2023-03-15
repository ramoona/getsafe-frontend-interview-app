import logo from '../../assets/logo.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from '../../pages/Home'
import { DeveloperInsurancePage } from '../../pages/DeveloperInsurance'
import styles from './App.module.css'

export const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
        </header>
        <Routes>
          <Route
            path="/buy/insurance_dev"
            element={<DeveloperInsurancePage />}
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}
