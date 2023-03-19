import React, { InputHTMLAttributes } from 'react'
import styles from './TextField.module.css'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  id,
  value,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input {...props} id={id} value={value || ''} className={styles.input} />
    </div>
  )
}
