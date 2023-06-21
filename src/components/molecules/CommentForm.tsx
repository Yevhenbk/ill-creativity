'use client'

import React, { FC, useState } from 'react'
import axios from 'axios'
import Text from '@atoms/Text'
import Button from './Button'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

interface Props {
  productId: number
}

const CommentForm: FC<Props> = (productId) => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState<string>('')
  const [rating, setRating] = useState<number>(0)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://formspree.io/f/xayzrgba', { 
        productId,
        name,
        comment,
        rating,
       })
      console.log('Form submission successful:', response.data)
      setName('')
      setComment('')
      setRating(0)
    } catch (error) {
      console.error('Form submission failed:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col
    gap-5'>
      <div className='flex flex-col items-start gap-4'>
        <label htmlFor='name'>
          <Text intent='teritary' size='large'>
            Name:
          </Text>  
        </label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-2 border-gray-300 px-4 py-2 rounded-lg'
        />
      </div>
      <div className='flex flex-col items-start gap-4'>
        <label htmlFor='comment'>
          <Text intent='teritary' size='large'>
            Comment:
          </Text>  
        </label>
        <textarea
          id='comment'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Write your comment...'
          className='w-full h-20 resize-none border-2 border-gray-300 px-4 py-2 rounded-lg'
        ></textarea>
      </div>
      <div className='flex items-center'>
          <Text intent='teritary' size='large'>
            <p className='mr-2'>Rating:</p>
          </Text>  
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onClick={() => setRating(value)}
            className={`cursor-pointer text-lg flex gap-2
            ${value <= rating ? 'text-[#F4AE4F]' : 'text-black'}`}
          >
            {value <= rating ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        ))}
      </div>
      <Button type='submit' intent='primary'>
        <Text intent='quinary' uppercase={true} size='small'>
          Submit  
        </Text>
      </Button>
    </form>
  )
}

export default CommentForm