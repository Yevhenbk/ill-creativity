import React, { FC } from 'react'
import Text from '@atoms/Text'
import Wrapper from '@atoms/Wrapper'
import Navbarmenu from '@organisms/Navbarmenu'
import SelectedProducts from '@organisms/SelectedProducts'
import Slider from '@organisms/Slider'

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <main>
      <Navbarmenu />
      <Wrapper>
        <Slider />
        <SelectedProducts />
      </Wrapper>
    </main>
  )
}

export default Home
