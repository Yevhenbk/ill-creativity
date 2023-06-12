import React, { FC } from 'react'
import Wrapper from '@atoms/Wrapper'
import Navbarmenu from '@organisms/Navbarmenu'
import SelectedProducts from '@organisms/SelectedProducts'
import ProductsDescription from '@organisms/ProductsDescription'
import Slider from '@organisms/Slider'
import Testimonials from '@organisms/Testimonials'
import Objections from '@organisms/Objections'
import CallToAction from '@organisms/CallToAction'
import Footer from '@organisms/Footer'

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
        <Objections />
        {/* <CallToAction />
        <Footer /> */}
      </Wrapper>
    </main>
  )
}

export default Home
