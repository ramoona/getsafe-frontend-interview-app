import React from 'react'
import { camelCaseToPascalCase } from '../../../utils/string'
import { BuyFlowData } from '../types'
import { StepBase } from './StepBase'

interface SummaryStepProps {
  data: BuyFlowData
  onNext(): void
}

export const SummaryStep: React.FC<SummaryStepProps> = ({ data, onNext }) => {
  return (
    <StepBase onNext={() => onNext()} nextBtnText="Purchase">
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          {camelCaseToPascalCase(key)}: {value ?? 'Not provided'}
        </div>
      ))}
    </StepBase>
  )
}
