import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ROUTES } from '../consts/routes'
import { PRODUCT_IDS_TO_NAMES } from '../consts/product'
import { ProductId } from '../types/product'
import { NotFoundPage } from './NotFound'

export const PurchasedPage = () => {
  const { productId } = useParams<{ productId: ProductId }>()

  if (!productId || !PRODUCT_IDS_TO_NAMES[productId]) {
    return <NotFoundPage />
  }

  return (
    <>
      <h1>🎉</h1>
      <p>
        You have successfully purchased <b>{PRODUCT_IDS_TO_NAMES[productId]}</b>
        !
      </p>
      <Link to={ROUTES.HOME}>To the Insurance List</Link>
    </>
  )
}
