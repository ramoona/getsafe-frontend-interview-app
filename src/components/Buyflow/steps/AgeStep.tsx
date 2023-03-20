import React, { useState } from 'react'
import { AgeData, BuyFlowAgeStep } from '../types'
import { StepForm } from './StepForm/StepForm'
import { TextField } from '../../ui/TextField/TextField'

interface AgeStepProps extends Omit<BuyFlowAgeStep, 'stepId'> {
  value: AgeData['age']
  onNext(data: AgeData): void
  onPrev?: () => void
}

export const AgeStep: React.FC<AgeStepProps> = ({
  value,
  onNext,
  onPrev,
  optional,
  min,
  max,
}) => {
  const [age, setAge] = useState(value)

  return (
    <StepForm onNext={() => onNext({ age })} onPrev={onPrev}>
      <TextField
        label="Age"
        id="age"
        type="number"
        onChange={({ target: { value } }) => setAge(Number(value))}
        value={age}
        required={!optional}
        min={min}
        max={max}
        autoFocus
      />
    </StepForm>
  )
}
