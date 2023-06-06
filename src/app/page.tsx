import React, { FC } from 'react'
import Wrapper from '@atoms/Wrapper'
import Navbarmenu from '@organisms/Navbarmenu'
import SelectedProducts from '@organisms/SelectedProducts'
import ProductsDescription from '@organisms/ProductsDescription'
import Slider from '@organisms/Slider'
import Testimonials from '@organisms/Testimonials'

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <main>
      <Navbarmenu />
      <Wrapper>
        <Slider />
        <SelectedProducts />
        <ProductsDescription />
        <Testimonials />
      </Wrapper>
    </main>
  )
}

export default Home
