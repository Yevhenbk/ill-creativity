import React, { FC } from 'react'
import Text from '@atoms/Text'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  productId: number,
  image: any,
  alt: string,
  title: string,
  description: string,
  price: string  
}

const SelectedProduct: FC<Props> = (props) => {
  return (
    <div className='flex flex-col items-center
    justify-center overflow-hidden w-[80%] h-[100%] rounded-lg'>
      <img src={props.image} alt={props.alt} className='w-[100%] rounded-lg 
      h-[20rem] object-cover transition-transform duration-300 transform-gpu
      shadow-sm' />  
      <div className='flex flex-row justify-between w-[100%] pt-4 items-center'>
        <div className='text-left'>
          <Text intent='teritary' uppercase={true} size='large'
          bold={true}>
            {props.title}
          </Text>
          <Text intent='teritary' size='medium'>
            {props.description}
          </Text>
          <Text intent='teritary' uppercase={true} size='medium'
          bold={true}>
            {props.price}
          </Text>
        </div>
        <Link href={`/shop/${props.productId}`} className='ml-2'>
          <Button intent='teritary' fullWidth={false}>
            <Text intent='quinary' uppercase={true} size='extrasmall'>
              Buy Now
            </Text>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SelectedProduct