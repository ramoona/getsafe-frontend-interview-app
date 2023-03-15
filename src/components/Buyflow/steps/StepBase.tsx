import React, { PropsWithChildren, useRef } from 'react'

type StepBaseProps = PropsWithChildren<{
  onNext(): void
  nextBtnText?: string
}>

export const StepBase: React.FC<StepBaseProps> = ({
  onNext,
  nextBtnText = 'Next',
  children,
}) => {
  const ref = useRef<HTMLFormElement>(null)
  return (
    <form
      ref={ref}
      onSubmit={(e) => {
        e.preventDefault()

        if (ref.current?.reportValidity()) {
          onNext()
        }
      }}
    >
      {children}
      <div>
        <button type="submit">{nextBtnText}</button>
      </div>
    </form>
  )
}
