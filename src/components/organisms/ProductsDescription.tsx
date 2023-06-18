import React, { FC } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import Text from '@atoms/Text'
import { 
  benefits, Props as BenefitsProps } from '@utils/Benefits'
import Image from 'next/image'
import noimage from '../../../public/noimage.jpg'

interface Props {}

const ProductsDescription: FC<Props> = ({}) => {
  return (
    <div className='h-[40rem] flex flex-row justify-around
    items-center relative max-[800px]:items-center
    max-[800px]:justify-center max-[800px]:h-[45rem]'>
      <Image src={noimage} alt='Product' className='w-[45vw]
      h-[40rem] object-cover max-[800px]:hidden' />
      <div className='w-[50rem] flex flex-col items-center
      right-0 max-[800px]:w-[20rem] max-[800px]:left-[2rem]'>
        <div className='w-[30rem] flex flex-col gap-12 text-left
        items-start max-[800px]:w-[20rem]'>
          <Text intent='teritary' uppercase={true} bold={true}
          size='secondaryHeader'>
            <h4>
              Long headline on two lines to turn your visitors into users 
            </h4>  
          </Text>
          <Text intent='teritary' size='extralarge'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nulla itaque porro nostrum aliquid modi obcaecati consectetur.
            </p>  
          </Text>
          <ul className='flex flex-col gap-5'>
            {benefits.map((item: BenefitsProps) => (
              <li className='flex flex-row items-center gap-3'>
                <AiFillCheckCircle className='text-xl text-green-500' />
                <Text intent='teritary' size='extralarge'>
                  {item.benefit}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>  
    </div>
  )
}

export default ProductsDescription