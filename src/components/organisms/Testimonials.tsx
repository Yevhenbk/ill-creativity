import React, { FC } from 'react'
import Text from '@atoms/Text'
import TestimonialCard from '@molecules/TestimonialCard'
import { 
  testimonials, Props as TestimonialsProps } from '@utils/Testimonials'
import noimage from '../../../public/noimage.jpg'

interface Props {}

const Testimonials: FC<Props> = ({}) => {
  return (
    <div className='bg-white h-[50rem] flex max-[1270px]:py-[4rem]
    flex-col items-center justify-center gap-32 max-[1270px]:h-auto'>
      <div className='flex flex-row justify-between w-[80%] max-[1270px]:gap-8
      max-[1560px]:w-[100%] max-[1560px]:justify-around max-[1270px]:flex-col
      max-[1270px]:items-center'>
        {testimonials.map((item: TestimonialsProps, index: number) => (
          <TestimonialCard key={index} name={item.name} description={item.description}
          review={item.review} image={noimage} />  
        ))}
      </div>  
    </div>
  )
}

export default Testimonials