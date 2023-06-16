import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Text from '@atoms/Text'
import noimage from '../../../public/noimage.jpg'

interface Props {
  productId: number,
  title: string,
  description: string,
  price: string,
}

const Product: FC<Props> = (props) => {
  return (
    <Link href={`/shop/${props.productId}`}>
      <div className='flex flex-col items-center
      justify-center gap-0 hover:scale-105 transform-gpu
      transition-transform duration-300'>
        <Image src={noimage} alt={props.title} 
        className='object-cover w-[20rem] h-[20rem] mb-4' />
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
    </Link>
  )
}
  
  export default Product