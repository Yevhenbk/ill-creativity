'use client'

import React, { FC, useContext } from 'react'
import { Context } from '@store/context'
import Text from '@atoms/Text'
import Button from './Button'

interface Props {
  title: string,
  description: string,
  price: string,
  quantity: number,
  image: string
}

const CartItem: FC<Props> = (props) => {

  return (
    <div className='w-[35rem] border-2 border-gray-300 p-2
    rounded-lg flex justify-between items-end'>
      <div className='flex gap-5'>
        <img src={props.image} alt=''  className='h-[5rem] w-[5rem]
        rounded-lg'/>
        <div className='flex flex-col justify-between'>
        <Text intent='teritary' uppercase={true} size='medium'
          bold={true}>
            {props.title}
          </Text>
          <Text intent='teritary' uppercase={true} size='small'
          bold={true}>
            {props.price}
          </Text>
          <Text intent='teritary' size='small'>
            {props.description}
          </Text>
        </div>
      </div>
      <div className='w-[8rem]'>
        <Text intent='teritary' size='small'>
          <p className='mb-[.75rem]'>
            Quantity: {props.quantity}
          </p>
        </Text>
        <Button intent='cartItem' fullWidth={false}>
          <Text intent='quinary' size='extrasmall'>
            Remove Item
          </Text>
        </Button>
      </div>
    </div>
  )
}

export default CartItem