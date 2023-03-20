import logo from '../../assets/logo.svg'
import { Link, Route, Routes } from 'react-router-dom'
import { HomePage } from '../../pages/Home'
import { InsurancePage } from '../../pages/Insurance'
import styles from './App.module.css'
import { ROUTES } from '../../consts/routes'
import { ProductId } from '../../types/product'
import { PurchasedPage } from '../../pages/Purchased'
import { NotFoundPage } from '../../pages/NotFound'

export const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={ROUTES.HOME}>
          <img src={logo} className={styles.logo} alt="logo" />
        </Link>
      </header>
      <Routes>
        <Route
          path={ROUTES.BUY.DEVELOPER_INSURANCE}
          element={<InsurancePage productId={ProductId.DeveloperInsurance} />}
        />
        <Route
          path={ROUTES.BUY.DESIGNER_INSURANCE}
          element={<InsurancePage productId={ProductId.DesignerInsurance} />}
        />
        <Route
          path={`${ROUTES.PURCHASED}/:productId`}
          element={<PurchasedPage />}
        />
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
