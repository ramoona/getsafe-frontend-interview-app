import React, { useState } from 'react'
import { AgeStep } from './steps/AgeStep'
import { EmailStep } from './steps/EmailStep'
import { SummaryStep } from './steps/SummaryStep'

interface BuyflowProps {
  productId: ProductId
}

export enum ProductId {
  DeveloperInsurance = 'dev_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductId.DeveloperInsurance]: 'Developer Insurance',
}

export const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState('email')
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
  })
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === 'email' && <EmailStep cb={getStepCallback('age')} />) ||
        (currentStep === 'age' && (
          <AgeStep cb={getStepCallback('summary')} />
        )) ||
        (currentStep === 'summary' && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}
