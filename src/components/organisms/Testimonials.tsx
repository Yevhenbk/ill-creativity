import React, { FC } from 'react'
import Text from '@atoms/Text'
import TestimonialCard from '@molecules/TestimonialCard'
import { 
  testimonials, Props as TestimonialsProps } from '@utils/Testimonials'
import noimage from '../../../public/noimage.jpg'

interface Props {}

const Testimonials: FC<Props> = ({}) => {
  return (
    <div className='bg-white h-[60rem] flex
    flex-col items-center justify-center gap-32'>
      <div className='w-[40rem] flex flex-col gap-12 text-center
      items-center'>
        <Text intent='teritary' uppercase={true} bold={true}
        size='teritaryHeader'>
        <h4>
          What do they say about us
        </h4>  
        </Text>
        <Text intent='teritary' size='extralarge'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nulla itaque porro nostrum aliquid modi obcaecati consectetur.
        </p>  
        </Text>
      </div>  
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