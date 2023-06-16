import React, { FC } from 'react'
import Navbarmenu from '@organisms/Navbarmenu'
import Wrapper from '@atoms/Wrapper'
import ProductList from '@organisms/ProductList'
import Footer from '@organisms/Footer'

interface Props {}

const Shop: FC<Props> = ({}) => {
  return (
    <main>
      <Navbarmenu />
      <Wrapper>
        <ProductList /> 
        <Footer />
      </Wrapper>
    </main>
  )
}

export default Shop