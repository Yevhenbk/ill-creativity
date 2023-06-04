import React, { FC } from 'react'
import Text from '@atoms/Text'
import Wrapper from '@atoms/Wrapper'
import Navbarmenu from '@organisms/Navbarmenu'
import Slider from '@organisms/Slider'

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <main>
      <Navbarmenu />
      <Wrapper>
        <Slider />
      </Wrapper>
    </main>
  )
}

export default Home
