import React, { FC } from 'react'
import AddCart from '@organisms/AddCart'
import Navbarmenu from '@organisms/Navbarmenu'
import Wrapper from '@atoms/Wrapper'
import Footer from '@organisms/Footer'

interface Props {}

const Cart: FC<Props> = ({}) => {
  return (
    <main>
      <Navbarmenu />
      <Wrapper>
        <AddCart />
        <Footer />
      </Wrapper>
    </main>
  )
}

export default Cart