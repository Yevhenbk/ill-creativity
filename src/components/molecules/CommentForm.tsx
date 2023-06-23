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
  const [showModal, setShowModal] = useState(false)
  const [showForm, setShowForm] = useState(false)

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
      setShowModal(true)
      setShowForm(false)

      setTimeout(() => {
        setShowModal(false)
      }, 5000)
    } catch (error) {
      console.error('Form submission failed:', error)
    }
  }

  return (
    <div className='relative'>
      {showForm ?
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
              className='border-2 border-gray-300 px-4 py-2 rounded-lg
              max-[800px]:w-[100%]'
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
      : <Button intent='quinary' fullWidth={true} onClick={() => setShowForm(true)}>
          <Text intent='quinary' size='small'>
            Write my opinion
          </Text>
        </Button>
      }
      {showModal && (
        <div className={`fixed bottom-[2.5vw] left-[2.5vw] bg-black rounded-lg shadow-lg p-4
        w-[95vw] duration-300 ${showModal ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
          <Text intent='primary' size='medium'>
            <p className='flex w-[100%] items-center justify-center'>
              Thank you for your comment! It'll be posted in the following 24h
            </p>
          </Text>  
        </div>
      )}
    </div>
  )
}

export default CommentForm