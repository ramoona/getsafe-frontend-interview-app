import React, { useState } from 'react'
import { BuyFlowFullNameStep, FullNameData } from '../types'
import { StepForm } from './StepForm/StepForm'
import { TextField } from '../../ui/TextField/TextField'

interface FullNameStepProps extends Omit<BuyFlowFullNameStep, 'stepId'> {
  value: FullNameData
  onNext(data: FullNameData): void
  onPrev?: () => void
}

export const FullNameStep: React.FC<FullNameStepProps> = ({
  value,
  onNext,
  onPrev,
  optional,
}) => {
  const [fullName, setFullName] = useState(value)

  return (
    <StepForm onNext={() => onNext(fullName)} onPrev={onPrev}>
      <TextField
        label="First Name"
        id="firstName"
        onChange={({ target: { value } }) =>
          setFullName({ ...fullName, firstName: value })
        }
        value={fullName.firstName}
        required={!optional}
        autoFocus
      />
      <TextField
        label="Last Name"
        id="lastName"
        onChange={({ target: { value } }) =>
          setFullName({ ...fullName, lastName: value })
        }
        value={fullName.lastName}
        required={!optional}
      />
    </StepForm>
  )
}
