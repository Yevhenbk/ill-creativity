import React, { FC } from 'react'
import Text from '@atoms/Text'
import Image from 'next/image'
import noimage from '../../../public/noimage.jpg'

interface Props {}

const Slider: FC<Props> = () => {
  return (
    <div className='w-[100%] flex flex-row justify-evenly
    items-center h-[45rem] overflow-hidden'>
      <div className='flex flex-col w-[50vw] items-center'>
        <div className='w-[30rem] flex flex-col gap-5 text-left'>
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
      </div>  
      <div className='w-[50vw]'>
        <Image src={noimage} alt='noimage' className='w-[100%] object-cover' />
      </div>  
    </div>
  )
}

export default Slider