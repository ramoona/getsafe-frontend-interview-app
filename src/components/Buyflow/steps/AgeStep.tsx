import React, { useState } from 'react'
import { AgeData, BuyFlowAgeStep } from '../types'
import { StepBase } from './StepBase'

interface AgeStepProps extends Omit<BuyFlowAgeStep, 'stepId'> {
  value: AgeData['age']
  onNext(data: AgeData): void
}

export const AgeStep: React.FC<AgeStepProps> = ({
  value,
  onNext,
  optional,
  min,
  max,
}) => {
  const [age, setAge] = useState(value)

  return (
    <StepBase onNext={() => onNext({ age })}>
      <div>
        <label htmlFor="age">Age: </label>
        <input
          id="age"
          type="number"
          onChange={({ target: { value } }) => setAge(Number(value))}
          value={age || ''}
          required={!optional}
          min={min}
          max={max}
        ></input>
      </div>
    </StepBase>
  )
}
