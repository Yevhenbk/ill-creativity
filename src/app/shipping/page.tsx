import React, { FC } from 'react'
import Navbarmenu from '@organisms/Navbarmenu'
import Wrapper from '@atoms/Wrapper'
import Footer from '@organisms/Footer'
import ShippingUs from '@organisms/ShippingUs'

interface Props {}

const Sipping: FC<Props> = ({}) => {
  return (
    <main>
      <Navbarmenu />
      <Wrapper>
        <ShippingUs />
        <Footer />
      </Wrapper>
    </main>
  )
}

export default Sipping