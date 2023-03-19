import React, { PropsWithChildren, useRef } from 'react'
import styles from './StepForm.module.css'

type StepBaseProps = PropsWithChildren<{
  onNext(): void
  onPrev?: () => void
  nextBtnText?: string
  prevBtnText?: string
}>

export const StepForm: React.FC<StepBaseProps> = ({
  onNext,
  onPrev,
  nextBtnText = 'Next >',
  prevBtnText = '< Back',
  children,
}) => {
  const ref = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={ref}
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault()
        if (ref.current?.reportValidity()) onNext()
      }}
    >
      {children}
      <div className={styles.buttonsContainer}>
        {!!onPrev && (
          <button type="button" className={styles.button} onClick={onPrev}>
            {prevBtnText}
          </button>
        )}
        <button type="submit" className={styles.button}>
          {nextBtnText}
        </button>
      </div>
    </form>
  )
}
