import React, { useCallback, useState } from 'react'
import { PRODUCT_IDS_TO_NAMES, STEPS_BY_PRODUCT_ID } from './consts'
import { AgeStep } from './steps/AgeStep'
import { EmailStep } from './steps/EmailStep'
import { SummaryStep } from './steps/SummaryStep'
import { BuyFlowData, BuyFlowStep, ProductId, StepId } from './types'

interface BuyflowProps {
  productId: ProductId
  onSubmit(data: BuyFlowData): void
}

interface CurrentBuyFlowStepProps {
  step: BuyFlowStep
  data: BuyFlowData
  onNext(data: BuyFlowData): void
  onSubmit(data: BuyFlowData): void
}

const CurrentBuyFlowStep: React.FC<CurrentBuyFlowStepProps> = ({
  step,
  onNext,
  data,
  onSubmit,
}) => {
  const handleSubmit = useCallback(() => onSubmit(data), [data, onSubmit])

  switch (step.stepId) {
    case StepId.Age:
      return (
        <AgeStep
          value={data.age}
          onNext={onNext}
          optional={step.optional}
          max={step.max}
          min={step.min}
        />
      )
    case StepId.Email:
      return (
        <EmailStep
          value={data.email}
          onNext={onNext}
          optional={step.optional}
        />
      )
    case StepId.Summary:
      return <SummaryStep data={data} onNext={handleSubmit} />
    default:
      return <div>Error</div>
  }
}

export const Buyflow: React.FC<BuyflowProps> = ({ productId, onSubmit }) => {
  const [currentStepIndex, setCurrenStepIndex] = useState(0)
  const [collectedData, updateData] = useState<BuyFlowData>({})

  const steps = STEPS_BY_PRODUCT_ID[productId]

  const handleNextStep = useCallback(
    (updatedData: BuyFlowData) => {
      updateData({ ...collectedData, ...updatedData })
      setCurrenStepIndex(currentStepIndex + 1)
    },
    [collectedData, currentStepIndex]
  )

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      <CurrentBuyFlowStep
        step={steps[currentStepIndex]}
        data={collectedData}
        onNext={handleNextStep}
        onSubmit={onSubmit}
      />
    </>
  )
}
