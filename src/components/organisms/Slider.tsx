import React, { FC } from 'react'
import Link from 'next/link'
import Text from '@atoms/Text'
import Button from '@molecules/Button'
import UncontrolledExample from './Carousel'
import Image from 'next/image'
import noimage from '../../../public/noimage.jpg'

interface Props {}

const Slider: FC<Props> = () => {
  return (
    <div className='w-[100%] flex flex-row justify-evenly
    items-center h-[45rem] overflow-hidden bg-white
    max-[1200px]:flex-col max-[1200px]:h-auto'>
      <div className='flex flex-col w-[50vw] items-center max-[1200px]:w-auto'>
        <div className='w-[30rem] flex flex-col gap-12 text-left max-[1200px]:w-[20rem]
        max-[1200px]:py-[4rem]'>
          <Text intent='teritary' uppercase={true} bold={true}
          size='header'>
            <h1 className='w-[20rem]'>All love, all year</h1>  
          </Text>
          <Text intent='teritary' size='extralarge'>
            <p className='w-[30rem] max-[1200px]:w-[20rem]'>
              Get ready to embark on a thrilling shopping wxperience 
              like no other. Start exploring our collection today and let 
              Illuminating Creativity be your gateway to a world of innovation 
              and imagination!
            </p>  
          </Text>
          <Link href='/shop'>
            <Button intent='primary' fullWidth={false}>
              <Text intent='quinary' uppercase={true} size='small'>
                Shop Now
              </Text>
            </Button>
          </Link>
        </div>
      </div>  
      <UncontrolledExample />
    </div>
  )
}

export default Slider