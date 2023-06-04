import React, { FC } from 'react'
import Text from '@atoms/Text'
import Navbarmenu from '@organisms/Navbarmenu'
import Slider from '@organisms/Slider'

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <main>
      <Navbarmenu />
      <div className='relative top-20'>
        <Slider />
      </div>
    </main>
  )
}

export default Home
