'use client'

import React, { FC, useContext } from 'react'
import Text from '@atoms/Text'
import CartItem from '@molecules/CartItem'
import Button from '@molecules/Button'
import { Context } from '@store/context'

interface Props {}

const AddCart: FC<Props> = ({}) => {

  const { cartItems, calculateTotalPrice } = useContext(Context)

  return (
    <div className='py-16 overflow-hidden flex flex-col items-center 
    justify-center'>
      <Text intent='teritary' uppercase={true} bold={true}
      size='header'>
        <h1 className='w-[100%] text-center'>Cart</h1>  
      </Text>
      <div className='flex flex-col gap-12 w-[100%] items-center
      pt-16'>
        {cartItems ?
        cartItems.map((item: any) => (
          <CartItem key={item.id} price={item.price} title={item.title}
          description={item.description} quantity={item.quantity} image={item.image}/>
        )) : <></>}
      </div>
      {cartItems.length !== 0 ?
      <div className='w-[35rem] flex flex-col items-center justify-center pt-20
      gap-8 max-[800px]:w-[20rem]'>
        <Text intent='teritary' size='large' bold={true}>
          <p>
            Total price: {calculateTotalPrice()}$
          </p>
        </Text>
        <Button intent='primary' fullWidth={true}>
          <Text intent='quinary' size='large' uppercase={true}>
            Checkout  
          </Text>  
        </Button>  
      </div>    
      : <Text intent='teritary' size='large'>
          <p className='py-20'>( The Cart is empty )</p>
        </Text>}
    </div>
  )
}

export default AddCart