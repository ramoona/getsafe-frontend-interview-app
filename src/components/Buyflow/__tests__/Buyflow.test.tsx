import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Buyflow } from '../Buyflow'
import { ProductId } from '../../../types/product'

describe('Buyflow', () => {
  describe('Developer Insurance', () => {
    test('renders all steps', async () => {
      render(
        <Buyflow productId={ProductId.DeveloperInsurance} onSubmit={() => {}} />
      )

      await processEmailStep()
      await processAgeStep()
      await processSummaryStep()
    })

    test('invokes onSubmit handler with correct data', async () => {
      const onSubmit = jest.fn((data) => data)
      render(
        <Buyflow productId={ProductId.DeveloperInsurance} onSubmit={onSubmit} />
      )

      await processEmailStep()
      await processAgeStep()
      await processSummaryStep()

      const purchaseButton = screen.getByText(/purchase/i)
      await userEvent.click(purchaseButton)

      expect(onSubmit).toBeCalledWith({ age: 25, email: 'test@test.com' })
    })
  })

  describe('Designer Insurance', () => {
    test('renders all steps', async () => {
      render(
        <Buyflow productId={ProductId.DesignerInsurance} onSubmit={() => {}} />
      )

      await processFullNameStep()
      await processEmailStep()
      await processAgeStep()
      await processSummaryStep()
    })

    test('invokes onSubmit handler with correct data', async () => {
      const onSubmit = jest.fn((data) => data)
      render(
        <Buyflow productId={ProductId.DesignerInsurance} onSubmit={onSubmit} />
      )

      await processFullNameStep()
      await processEmailStep()
      await processAgeStep()
      await processSummaryStep()

      const purchaseButton = screen.getByText(/purchase/i)
      await userEvent.click(purchaseButton)

      expect(onSubmit).toBeCalledWith({
        age: 25,
        email: 'test@test.com',
        firstName: 'Jane',
        lastName: 'Doe',
      })
    })
  })

  test('renders error if product ID is not recognized', () => {
    // @ts-expect-error - passing invalid product ID for testing purpose
    render(<Buyflow productId="random" onSubmit={() => {}} />)

    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })
})

async function processEmailStep() {
  const input = screen.getByLabelText(/email/i)
  const nextButton = screen.getByText(/next/i)

  expect(input).toBeInTheDocument()
  await userEvent.click(nextButton)
  expect(input).toBeInvalid()
  await userEvent.type(input, 'test@test.com')
  await userEvent.click(nextButton)
}

async function processAgeStep() {
  const input = screen.getByLabelText(/age/i)
  const nextButton = screen.getByText(/next/i)

  expect(input).toBeInTheDocument()
  await userEvent.click(nextButton)
  expect(input).toBeInvalid()
  await userEvent.type(input, '25')
  await userEvent.click(nextButton)
}

async function processFullNameStep() {
  const firstNameInput = screen.getByLabelText(/first name/i)
  const lastNameInput = screen.getByLabelText(/last name/i)
  const nextButton = screen.getByText(/next/i)

  expect(firstNameInput).toBeInTheDocument()
  expect(lastNameInput).toBeInTheDocument()
  await userEvent.click(nextButton)
  expect(firstNameInput).toBeInvalid()
  expect(lastNameInput).toBeInvalid()
  await userEvent.type(firstNameInput, 'Jane')
  await userEvent.type(lastNameInput, 'Doe')
  await userEvent.click(nextButton)
}

async function processSummaryStep() {
  const purchaseButton = screen.getByText(/purchase/i)
  const email = screen.getByText('test@test.com')
  const age = screen.getByText('25')

  expect(purchaseButton).toBeInTheDocument()
  expect(email).toBeInTheDocument()
  expect(age).toBeInTheDocument()
  await userEvent.click(purchaseButton)
}
