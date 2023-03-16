import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../consts/routes'

export const NotFoundPage = () => {
  return (
    <>
      <h1>We couldn't find this page 😢</h1>
      <Link to={ROUTES.HOME}>To the Insurance List</Link>
    </>
  )
}
