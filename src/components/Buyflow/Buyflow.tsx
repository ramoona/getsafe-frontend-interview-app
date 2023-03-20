import React, { useCallback, useState } from 'react'
import { STEPS_BY_PRODUCT_ID } from './consts'
import { AgeStep } from './steps/AgeStep'
import { EmailStep } from './steps/EmailStep'
import { SummaryStep } from './steps/SummaryStep'
import { FullNameStep } from './steps/FullNameStep'
import { BuyFlowData, BuyFlowStep, StepId } from './types'
import { ProductId } from '../../types/product'

interface BuyflowProps {
  productId: ProductId
  onSubmit(data: BuyFlowData): void
}

interface CurrentBuyFlowStepProps {
  step: BuyFlowStep
  data: BuyFlowData
  onNext(data: BuyFlowData): void
  onPrev?: () => void
  onSubmit(data: BuyFlowData): void
}

const CurrentBuyFlowStep: React.FC<CurrentBuyFlowStepProps> = ({
  step,
  onNext,
  onPrev,
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
          onPrev={onPrev}
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
          onPrev={onPrev}
          optional={step.optional}
        />
      )
    case StepId.FullName:
      return (
        <FullNameStep
          value={{ firstName: data.firstName, lastName: data.lastName }}
          onNext={onNext}
          onPrev={onPrev}
          optional={step.optional}
        />
      )
    case StepId.Summary:
      return <SummaryStep data={data} onNext={handleSubmit} onPrev={onPrev} />
    default:
      return <div>Error: flow step is not found</div>
  }
}

export const Buyflow: React.FC<BuyflowProps> = ({ productId, onSubmit }) => {
  const [currentStepIndex, setCurrenStepIndex] = useState(0)
  const [collectedData, updateData] = useState<BuyFlowData>({})

  const steps = STEPS_BY_PRODUCT_ID[productId]

  const handleNextStep = useCallback(
    (updatedData: BuyFlowData) => {
      updateData((data) => ({ ...data, ...updatedData }))
      setCurrenStepIndex(Math.min(currentStepIndex + 1, steps.length - 1))
    },
    [currentStepIndex, steps]
  )

  const handlePrevStep = useCallback(() => {
    setCurrenStepIndex(Math.max(0, currentStepIndex - 1))
  }, [currentStepIndex])

  if (!steps) {
    return <div>Error: flow for this product ID is not found</div>
  }

  return (
    <CurrentBuyFlowStep
      step={steps[currentStepIndex]}
      data={collectedData}
      onNext={handleNextStep}
      onPrev={currentStepIndex ? handlePrevStep : undefined}
      onSubmit={onSubmit}
    />
  )
}
