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

  const { cartItems, setCartItems } = useContext(Context)

  const removeFromCart = () => {
    const updatedCartItems = cartItems.filter((item: any) => item.title !== props.title);
    setCartItems(updatedCartItems);
  }

  return (
    <div className='w-[35rem] border-2 border-gray-300 p-2
    rounded-lg flex justify-between items-end max-[800px]:w-[20rem]
    max-[800px]:flex-col relative'>
      <div className='flex gap-5 max-[800px]:flex-col'>
        <img src={props.image} alt=''  className='h-[5rem] w-[5rem]
        rounded-lg max-[800px]:h-[12rem] max-[800px]:w-[20rem] object-cover'/>
        <div className='flex flex-col justify-between max-[800px]:w-[10rem]'>
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
      <div className='w-[8rem] max-[800px]:absolute max-[800px]:bottom-2'>
        <Text intent='teritary' size='small'>
          <p className='mb-[.75rem]'>
            Quantity: {props.quantity}
          </p>
        </Text>
        <Button intent='cartItem' fullWidth={false}
        onClick={removeFromCart}>
          <Text intent='quinary' size='extrasmall'>
            Remove Item
          </Text>
        </Button>
      </div>
    </div>
  )
}

export default CartItem