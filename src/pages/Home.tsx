import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <p>Welcome to Getsafe's Developer Insurance</p>
      <Link to="/buy/insurance_dev">Get started!</Link>
    </>
  )
}
