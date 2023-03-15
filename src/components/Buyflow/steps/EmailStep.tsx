import React, { useState } from 'react'
import { BuyFlowEmailStep, EmailData } from '../types'
import { StepBase } from './StepBase'

interface EmailStepProps extends Omit<BuyFlowEmailStep, 'stepId'> {
  value: EmailData['email']
  onNext(data: EmailData): void
}

export const EmailStep: React.FC<EmailStepProps> = ({
  value,
  onNext,
  optional,
}) => {
  const [email, setEmail] = useState(value)

  return (
    <StepBase onNext={() => onNext({ email })}>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => setEmail(value)}
          value={email || ''}
          required={!optional}
        ></input>
      </div>
    </StepBase>
  )
}
