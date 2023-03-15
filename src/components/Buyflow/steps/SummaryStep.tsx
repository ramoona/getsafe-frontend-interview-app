import React from 'react'
import { BuyFlowData } from '../types'

interface SummaryStepProps {
  data: BuyFlowData
  onNext(): void
}

export const SummaryStep: React.FC<SummaryStepProps> = ({ data, onNext }) => {
  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          {key}: {value ?? '-'}
        </div>
      ))}
      <button onClick={() => onNext()}>Purchase</button>
    </>
  )
}
