import React from 'react'
import { camelCaseToPascalCase } from '../../../utils/string'
import { BuyFlowData } from '../types'
import { StepForm } from './StepForm/StepForm'

interface SummaryStepProps {
  data: BuyFlowData
  onNext(): void
  onPrev?: () => void
}

export const SummaryStep: React.FC<SummaryStepProps> = ({
  data,
  onNext,
  onPrev,
}) => {
  return (
    <StepForm onNext={onNext} onPrev={onPrev} nextBtnText="Purchase">
      {Object.entries(data).map(([key, value]) => {
        const label = `${camelCaseToPascalCase(key)}: `
        return (
          <div key={key} id={key}>
            <span>{label}</span>
            <span>
              <b>{value ?? 'Not provided'}</b>
            </span>
          </div>
        )
      })}
    </StepForm>
  )
}
