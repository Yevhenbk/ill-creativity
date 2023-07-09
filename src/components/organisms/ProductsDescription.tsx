import React, { FC } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import Text from '@atoms/Text'
import { 
  benefits, Props as BenefitsProps } from '@utils/Benefits'

interface Props {}

const ProductsDescription: FC<Props> = ({}) => {
  return (
    <div className='h-[40rem] flex flex-row justify-around
    items-center relative max-[800px]:items-center max-[800px]:flex-col-reverse
    max-[800px]:justify-between max-[800px]:h-[65rem]'>
      <img src='https://ae01.alicdn.com/kf/Sa6fb69231f834181b1d03baaaadb9405M.jpg_640x640Q90.jpg_.webp' alt='Product' className='w-[45vw]
      h-[40rem] object-cover max-[800px]:h-[20rem] max-[800px]:w-[100%]' />
      <div className='w-[50rem] flex flex-col items-center
      max-[800px]:w-[20rem] max-[800px]:left-[2rem]
      max-[800px]:pt-16'>
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
              Experience the magic of Illuminatingcreativity and let your home 
              become a testament to your unique style and impeccable taste. Explore 
              our collection today and embark on a journey of transformation and 
              inspiration.
            </p>  
          </Text>
          <ul className='flex flex-col gap-5'>
            {benefits.map((item: BenefitsProps) => (
              <li className='flex flex-row items-center gap-3'>
                <AiFillCheckCircle className='text-xl text-[#F4AE4F]' />
                <Text intent='teritary' size='extralarge' italic={true}>
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