import { Link } from 'react-router-dom'
import { ROUTES } from '../consts/routes'
import { PRODUCT_IDS_TO_NAMES } from '../consts/product'
import { ProductId } from '../types/product'

export const HomePage = () => {
  return (
    <>
      <h1>Welcome to Getsafe Insurance</h1>
      <p>Get started with:</p>
      <div>
        <Link to={ROUTES.BUY.DEVELOPER_INSURANCE}>
          {PRODUCT_IDS_TO_NAMES[ProductId.DeveloperInsurance]}
        </Link>
      </div>
      <br />
      <div>
        <Link to={ROUTES.BUY.DESIGNER_INSURANCE}>
          {PRODUCT_IDS_TO_NAMES[ProductId.DesignerInsurance]}
        </Link>
      </div>
    </>
  )
}
