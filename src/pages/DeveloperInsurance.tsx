import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Buyflow } from '../components/Buyflow/Buyflow'
import { ProductId } from '../components/Buyflow/types'

export const DeveloperInsurancePage = () => {
  const navigate = useNavigate()

  const handleFlowSubmit = useCallback(() => {
    navigate('/purchased=dev_ins')
  }, [navigate])

  return (
    <Buyflow
      productId={ProductId.DeveloperInsurance}
      onSubmit={handleFlowSubmit}
    />
  )
}
