import React, { FC } from 'react'
import Text from '@atoms/Text'

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <main className='text-white'>
      <Text intent='primary'>
        <h1>Hey there</h1>
      </Text>
    </main>
  )
}

export default Home
