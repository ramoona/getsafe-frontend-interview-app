import React, { useState } from 'react'
import { BuyFlowFullNameStep, FullNameData } from '../types'
import { StepBase } from './StepBase'

interface FullNameStepProps extends Omit<BuyFlowFullNameStep, 'stepId'> {
  value: FullNameData
  onNext(data: FullNameData): void
}

export const FullNameStep: React.FC<FullNameStepProps> = ({
  value,
  onNext,
  optional,
}) => {
  const [fullName, setFullName] = useState(value)

  return (
    <StepBase onNext={() => onNext(fullName)}>
      <div>
        First Name:{' '}
        <input
          onChange={({ target: { value } }) =>
            setFullName({ ...fullName, firstName: value })
          }
          value={fullName.firstName || ''}
          required={!optional}
        ></input>
      </div>
      <div>
        Last Name:{' '}
        <input
          onChange={({ target: { value } }) =>
            setFullName({ ...fullName, lastName: value })
          }
          value={fullName.lastName || ''}
          required={!optional}
        ></input>
      </div>
    </StepBase>
  )
}
