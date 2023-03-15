import React, { useState } from 'react'
import { EmailData } from '../types'

interface EmailStepProps {
  value: EmailData['email']
  onNext(data: EmailData): void
}

export const EmailStep: React.FC<EmailStepProps> = ({ value, onNext }) => {
  const [email, setEmail] = useState(value)

  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email || ''}
        ></input>
      </div>
      <button onClick={() => onNext({ email })}>Next</button>
    </>
  )
}
