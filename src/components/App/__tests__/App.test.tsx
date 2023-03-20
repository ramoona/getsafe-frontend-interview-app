import { render, screen } from '@testing-library/react'
import { App } from '../App'
import { MemoryRouter } from 'react-router-dom'
import { ROUTES } from '../../../consts/routes'
import { ProductId } from '../../../types/product'

describe('App routing', () => {
  test('renders Home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    expect(
      screen.getByText(/welcome to getsafe insurance/i)
    ).toBeInTheDocument()
  })

  test('renders Insurance page', () => {
    render(
      <MemoryRouter initialEntries={[ROUTES.BUY.DEVELOPER_INSURANCE]}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText(/buying developer insurance/i)).toBeInTheDocument()
  })

  test('renders Purchased page', () => {
    render(
      <MemoryRouter
        initialEntries={[`${ROUTES.PURCHASED}/${ProductId.DeveloperInsurance}`]}
      >
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText(/developer insurance/i)).toBeInTheDocument()
  })

  test('renders 404 page', () => {
    render(
      <MemoryRouter initialEntries={['/random/route']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText(/page is not found/i)).toBeInTheDocument()
    expect(screen.getByText(/to the insurance list/i)).toHaveAttribute(
      'href',
      ROUTES.HOME
    )
  })
})
