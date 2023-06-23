'use client'

import React, { FC, useState, useContext } from 'react'
import Text from '@atoms/Text'
import Button from '@molecules/Button'
import ImageGallery from '@organisms/ImageGallery'
import { Context } from '@store/context'
import CommentForm from '@molecules/CommentForm'
import { AiOutlineStar } from 'react-icons/ai'

interface Props {
  productId: number,
  commentId: number,
  commentedId: number,
  title: string,
  description: string,
  price: string,
  info: string,
  image: string
}

interface ItemsProps {
  id: number,
  title: string,
  description: string,
  quantity: number,
  image: string,
  price: string
}

const ProductInfo: FC<Props> = (props) => {

  const { setCartItems, cartItems } = useContext(Context)

  const [quantity, setQuantity] = useState<number>(1)

  const maxQuantity = 10

  const product: ItemsProps = {
    id: props.productId,
    title: props.title,
    description: props.description,
    price: props.price,
    quantity: quantity,
    image: props.image,
  }

  const addToCart = () => {
    const existingProduct = cartItems.find((item: any) => item.id === product.id);

    if (existingProduct) {
      // If the product already exists in the cart, update the quantity with a maximum of 10
      const updatedCartItems = cartItems.map((item: any) => {
        if (item.id === product.id) {
          const newQuantity = Math.min(item.quantity + product.quantity, 10);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
  
      setCartItems(updatedCartItems);
    } else {
      // If the product is not already in the cart, add it to the cartItems array
      setCartItems([...cartItems, product]);
    }
  }

  const handleQuantityChange = (e: any) => {
    let newQuantity = parseInt(e.target.value, 10)
    newQuantity = Math.min(newQuantity, maxQuantity) // Ensure quantity doesn't exceed the maximum
    setQuantity(newQuantity)
  }

  return (
    <div className='grid grid-cols-2 w-[80vw] py-20 overflow-hidden
    max-[950px]:flex max-[950px]:flex-col max-[950px]:w-[90vw]
    max-[950px]:gap-12 max-[950px]:pt-[5vw] max-[950px]:pb-20'>
      <ImageGallery images={props.image} />
      <div className='flex flex-col ml-12 gap-12 max-[950px]:ml-0'>
        <div className='flex flex-col gap-2'>
          <Text intent='teritary' uppercase={true} size='teritaryHeader'
          bold={true}>
            {props.title}
          </Text>
          <div className='flex flex-row'>
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <Text intent='teritary' size='extrasmall'>
              <p className='pl-2'>(no comments yet)</p>
            </Text>
          </div>
          <Text intent='teritary' uppercase={true} size='large'
          bold={true}>
            {props.price}
          </Text>
        </div>
        <Text intent='teritary' size='large'>
          {props.info}
        </Text>
        <div className='flex flex-col gap-8'>
          <Text intent='teritary' size='extralarge' bold={true}
          uppercase={true}>
            {props.description}
          </Text>
          <div className='flex gap-2'>
            <input
              type='number'
              id='quantity'
              min='1'
              value={quantity}
              onChange={handleQuantityChange}
              className='border-2 border-gray-300 px-4 py-2 flex
              max-w-[5rem] rounded-lg items-center justify-center
              appearance-none quantity-input'
            />
            <Button intent='primary' fullWidth={true} onClick={addToCart}>
              <Text intent='quinary' uppercase={true} size='small'>
                Add to Cart
              </Text>
            </Button>
          </div>
        </div>
        <div className='flex flex-col gap-32'>
          <CommentForm productId={props.productId} />
          <div className='flex flex-col gap-12'>
            <Text intent='teritary' uppercase={true} size='secondaryHeader'
            bold={true}>
              <p>Recent Comments</p>
            </Text>
            <Text intent='teritary' size='medium'>
              <p>( No comments yet )</p>
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo