import { Link } from 'react-router-dom'
import { ROUTES } from '../consts/routes'

export const HomePage = () => {
  return (
    <>
      <p>Welcome to Getsafe's Developer Insurance</p>
      <Link to={ROUTES.BUY.DEVELOPER_INSURANCE}>Get started!</Link>
    </>
  )
}
