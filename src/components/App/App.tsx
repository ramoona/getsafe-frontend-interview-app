import logo from '../../assets/logo.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from '../../pages/Home'
import { DeveloperInsurancePage } from '../../pages/DeveloperInsurance'
import styles from './App.module.css'
import { ROUTES } from '../../consts/routes'

export const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
        </header>
        <Routes>
          <Route
            path={ROUTES.BUY.DEVELOPER_INSURANCE}
            element={<DeveloperInsurancePage />}
          />
          <Route
            path={`${ROUTES.PURCHASED}/:productId`}
            element={<div>Success page</div>}
          />
          <Route path={ROUTES.HOME} element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}
