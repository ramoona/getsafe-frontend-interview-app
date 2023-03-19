import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Buyflow } from '../components/Buyflow/Buyflow'
import { ROUTES } from '../consts/routes'
import { PRODUCT_IDS_TO_NAMES } from '../consts/product'
import { ProductId } from '../types/product'

interface InsurancePageProps {
  productId: ProductId
}

export const InsurancePage: React.FC<InsurancePageProps> = ({ productId }) => {
  const navigate = useNavigate()

  const handleFlowSubmit = useCallback(() => {
    navigate(`${ROUTES.PURCHASED}/${productId}`)
  }, [navigate, productId])

  return (
    <>
      <h2>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h2>
      <Buyflow productId={productId} onSubmit={handleFlowSubmit} />
    </>
  )
}
