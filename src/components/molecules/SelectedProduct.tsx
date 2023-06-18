import React, { FC } from 'react'
import Text from '@atoms/Text'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  image: any,
  alt: string,
  title: string,
  description: string,
  price: string  
}

const SelectedProduct: FC<Props> = (props) => {
  return (
    <div className='flex flex-col items-center
    justify-center overflow-hidden
    max-[1200px]:h-[20rem] w-[80%] h-[100%] rounded-lg'>
      <Image src={props.image} alt={props.alt} className='w-[100%] rounded-lg 
      h-[20rem] object-cover transition-transform duration-300 transform-gpu' />  
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
        <Link href='/shop'>
          <Button intent='teritary' fullWidth={false}>
            <Text intent='quinary' uppercase={true} size='extrasmall'>
              Add to Cart
            </Text>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SelectedProduct