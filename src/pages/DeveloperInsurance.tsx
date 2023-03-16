import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Buyflow } from '../components/Buyflow/Buyflow'
import { ProductId } from '../components/Buyflow/types'
import { ROUTES } from '../consts/routes'

export const DeveloperInsurancePage = () => {
  const navigate = useNavigate()

  const handleFlowSubmit = useCallback(() => {
    navigate(`${ROUTES.PURCHASED}/${ProductId.DeveloperInsurance}`)
  }, [navigate])

  return (
    <Buyflow
      productId={ProductId.DeveloperInsurance}
      onSubmit={handleFlowSubmit}
    />
  )
}
