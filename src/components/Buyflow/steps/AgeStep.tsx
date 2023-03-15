import React, { useState } from 'react'
import { AgeData } from '../types'

interface AgeStepProps {
  value: AgeData['age']
  onNext(data: AgeData): void
}

export const AgeStep: React.FC<AgeStepProps> = ({ value, onNext }) => {
  const [age, setAge] = useState(value)

  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age || ''}
        ></input>
      </div>
      <button onClick={() => onNext({ age })}>Next</button>
    </>
  )
}
