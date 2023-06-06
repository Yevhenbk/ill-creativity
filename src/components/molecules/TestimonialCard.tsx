import React, { FC } from 'react'
import Text from '@atoms/Text'
import Image from 'next/image'

interface Props {
  image: any,
  name: string,
  description: string,
  review: string
}

const TestimonialCard: FC<Props> = (props) => {
  return (
    <div className='w-[25rem] h-[32rem] flex flex-col 
    justify-between border-2 border-gray-200 p-8'>
      <Text intent='teritary' size='large'>
        "{props.review}"
      </Text>
      <div className='flex flex-col items-start gap-5'>
        <Image src={props.image} alt='Testimonial'
        className='rounded-full w-[4rem] h-[4rem]' />
        <div className='flex flex-col gap-0'>
          <Text intent='teritary' size='extralarge' bold={true}>
            {props.name}
          </Text>
          <Text intent='teritary' size='medium'>
            {props.description}
          </Text>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard