import React, { useState } from 'react'
import { BuyFlowEmailStep, EmailData } from '../types'
import { StepForm } from './StepForm/StepForm'
import { TextField } from '../../ui/TextField/TextField'

interface EmailStepProps extends Omit<BuyFlowEmailStep, 'stepId'> {
  value: EmailData['email']
  onNext(data: EmailData): void
  onPrev?: () => void
}

export const EmailStep: React.FC<EmailStepProps> = ({
  value,
  onNext,
  onPrev,
  optional,
}) => {
  const [email, setEmail] = useState(value)

  return (
    <StepForm onNext={() => onNext({ email })} onPrev={onPrev}>
      <TextField
        id="email"
        type="email"
        onChange={({ target: { value } }) => setEmail(value)}
        value={email}
        required={!optional}
        label="Email"
        autoFocus
      />
    </StepForm>
  )
}
