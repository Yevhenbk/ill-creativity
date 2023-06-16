'use client'

import React, { FC } from 'react'
import Navbarmenu from '@organisms/Navbarmenu'
import Wrapper from '@atoms/Wrapper'
import Footer from '@organisms/Footer'
import ProductInfo from '@organisms/ProductInfo'
import { 
  products, Props as ProductProps 
  } from '@utils/Products'

interface Props {
  params: any
}

const ProductPage: FC<Props> = (props) => {
  const product = products.find((p: ProductProps) => p.id === parseInt(props.params.product))

  return (
    <main>
      <Navbarmenu />
      <Wrapper>
      {product ? (
        <div className='flex justify-center'>
          <ProductInfo title={product.title} description={product.description}
          price={product.price} productId={product.id} info={product.info} />
        </div>
      ) : (
        <p>Product not found.</p>
      )}
      <Footer />
      </Wrapper>
    </main>
  )
}

export default ProductPage