import React, { FC } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Text from '@atoms/Text'
import { 
  benefits, Props as BenefitsProps } from '@utils/Benefits'
import Image from 'next/image'
import noimage from '../../../public/noimage.jpg'

interface Props {}

const ProductsDescription: FC<Props> = ({}) => {
  return (
    <div className='h-[50rem] flex flex-row justify-around
    items-center bg-black relative'>
      <Image src={noimage} alt='Product' className='w-[50vw]
      h-[50rem] object-cover' />
      <div className='w-[50vw] flex flex-col items-center'>
        <div className='w-[30rem] flex flex-col gap-12 text-left
        items-start'>
          <Text intent='primary' uppercase={true} bold={true}
          size='secondaryHeader'>
            <h4>
              Long headline on two lines to turn your visitors into users 
            </h4>  
          </Text>
          <Text intent='primary' size='extralarge'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nulla itaque porro nostrum aliquid modi obcaecati consectetur.
            </p>  
          </Text>
          <ul className='flex flex-col gap-5'>
            {benefits.map((item: BenefitsProps) => (
              <li className='flex flex-row items-center gap-3'>
                <AiOutlineCheckCircle className='text-xl text-white' />
                <Text intent='primary' size='extralarge'>
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