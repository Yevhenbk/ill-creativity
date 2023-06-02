import React, { FC } from 'react'
import Text from '@atoms/Text'

interface Props {}

const Slider: FC<Props> = () => {
  return (
    <div className='w-[100%] flex flex-row justify-evenly
    items-center min-h-[40rem]'>
      <div className='flex flex-col gap-5'>
        <Text intent='teritary' uppercase={true} bold={true}
        size='header'>
          <h1 className='w-[20rem]'>All love, all year</h1>  
        </Text>
        <Text intent='teritary' size='large'>
          <p className='w-[30rem] leading-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nulla itaque porro nostrum aliquid modi obcaecati consectetur 
            adipisicing elit itaque porro nostrum.
          </p>  
        </Text>
      </div>  
      <div></div>  
    </div>
  )
}

export default Slider