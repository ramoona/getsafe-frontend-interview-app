import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../consts/routes'

export const NotFoundPage = () => {
  return (
    <>
      <h1>This page is not found 😢</h1>
      <Link to={ROUTES.HOME}>To the Insurance List</Link>
    </>
  )
}
