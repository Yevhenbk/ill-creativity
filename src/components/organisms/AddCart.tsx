'use client'

import React, { FC, useContext } from 'react'
import Link from 'next/link'
import Text from '@atoms/Text'
import CartItem from '@molecules/CartItem'
import Button from '@molecules/Button'
import { Context } from '@store/context'
import SelectedProduct from '@molecules/SelectedProduct'
import { products, Props as ProductProps } from '@utils/Products'

interface Props {}

const AddCart: FC<Props> = ({}) => {

  const { cartItems, calculateTotalPrice } = useContext(Context)

  const itemCount = cartItems.length

  const generateRecommendations = (count: number) => {
    const randomProducts = []
    const availableProducts = products.filter((product) => {
      // Exclude products already in the cart
      return !cartItems.find((item: any) => item.id === product.id)
    })

    while (randomProducts.length < count && availableProducts.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableProducts.length)
      const randomProduct = availableProducts[randomIndex]
      randomProducts.push(randomProduct)
      availableProducts.splice(randomIndex, 1)
    }

    return randomProducts
  }

  const recommendations = generateRecommendations(3)

  return (
    <div className='pt-16 overflow-hidden flex flex-col items-center 
    justify-center'>
      <Text intent='teritary' uppercase={true} bold={true}
      size='header'>
        <h1 className='w-[100%] text-center'>Your Cart</h1>  
      </Text>
      {cartItems.length !== 0 ?
      <div className='flex justify-between w-[34rem] pt-16
      max-[800px]:w-[19rem]'>
        <Text intent='quinary' size='medium'>
          <p className='text-gray-700'>Continue Shopping</p>
        </Text>
        <Text intent='teritary' size='large' bold={true}>
          <p>{itemCount} {itemCount === 1 ? 'Item' : 'Items'}</p>
        </Text>
      </div>
      : <></>}
      <div className='flex flex-col gap-12 w-[100%] items-center
      pt-8'>
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
          <p className='pb-32 pt-16'>(Your cart is empty)</p>
        </Text>}
        <div className='mt-20 w-[100vw]'>
        <div className='w-[100%] flex flex-col items-center gap-5
        text-center max-[700px]:px-8'>
          <div className='w-[35rem] h-[2px] bg-gray-300 mb-4 max-[800px]:w-[19rem]' />
          <Text intent='teritary' uppercase={true} size='secondaryHeader'
          bold={true}>
            {cartItems.length !== 0 ? <h3>You may also like</h3> : <h3>You may like</h3>}
          </Text>
        </div>
        <div className='grid grid-cols-3 max-[700px]:flex max-[700px]:flex-col
        items-center justify-items-center pb-20 pt-16 max-[700px]:gap-y-8
        bg-[#F2F4F5] mt-8'>
          {recommendations.map((item: ProductProps) => (
            <SelectedProduct title={item.title} description={item.description}
            price={item.price} image={item.image} alt='Product Image' productId={item.id}/>
          ))}  
        </div>
      </div>
    </div>
  )
}

export default AddCart