import React, { FC } from 'react'
import Text from '@atoms/Text'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdShareAlt } from 'react-icons/io'

interface Props {
  image: any,
  name: string,
  description: string,
  review: string
}

const TestimonialCard: FC<Props> = (props) => {
  return (
    <div className='w-[25rem] h-[30rem] flex flex-col 
    justify-between border-2 border-gray-300 p-6
    max-[700px]:w-[22rem] rounded-lg'>
      <Text intent='teritary' size='large'>
        "{props.review}"
      </Text>
      <div className='flex flex-col items-start gap-5'>
        <Image src={props.image} alt='Testimonial'
        className='rounded-full w-[4rem] h-[4rem]
        shadow-sm' />
        <div className='flex flex-row w-[100%] justify-between
        items-end'>
          <div className='flex flex-col gap-0'>
            <Text intent='teritary' size='extralarge' bold={true}>
              {props.name}
            </Text>
            <Text intent='teritary' size='medium'>
              {props.description}
            </Text>
          </div>
          <Link href=''>
            <IoMdShareAlt className='text-3xl text-black
            hover:text-[#4128be]' />
          </Link>  
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard