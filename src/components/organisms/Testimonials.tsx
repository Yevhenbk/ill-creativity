import React, { FC } from 'react'
import Text from '@atoms/Text'
import TestimonialCard from '@molecules/TestimonialCard'
import { 
  testimonials, Props as TestimonialsProps } from '@utils/Testimonials'
import noimage from '../../../public/noimage.jpg'

interface Props {}

const Testimonials: FC<Props> = ({}) => {
  return (
    <div className='bg-white h-[50rem] flex
    flex-col items-center justify-center gap-32'>
      <div className='flex flex-row justify-between w-[80%]'>
        {testimonials.map((item: TestimonialsProps) => (
          <TestimonialCard name={item.name} description={item.description}
          review={item.review} image={noimage} />  
        ))}
      </div>  
    </div>
  )
}

export default Testimonials