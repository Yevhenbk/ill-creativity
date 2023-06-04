import React, { FC } from 'react'
import Image from 'next/image'
import Text from '@atoms/Text'

interface Props {
  image: any,
  alt: string,
  title: string,
  description: string,
  price: string  
}

const SelectedProduct: FC<Props> = (props) => {
  return (
    <div className='h-[20rem] flex flex-col items-center
    justify-center overflow-hidden'>
      <Image src={props.image} alt={props.alt} className='w-[100%] 
      h-[100%] object-cover' />  
      <div className='h-0 relative bottom-[8rem] text-center'>
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
    </div>
  )
}

export default SelectedProduct