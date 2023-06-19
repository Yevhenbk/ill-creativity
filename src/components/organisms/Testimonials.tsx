import React, { FC } from 'react'
import Text from '@atoms/Text'
import TestimonialCard from '@molecules/TestimonialCard'
import { 
  testimonials, Props as TestimonialsProps } from '@utils/Testimonials'
import noimage from '../../../public/noimage.jpg'

interface Props {}

const Testimonials: FC<Props> = ({}) => {
  return (
    <div className='pt-[4rem] bg-[#F2F4F5] '>
      <div className='w-[100%] flex flex-col items-center gap-5
      max-[700px]:text-center max-[700px]:px-8'>
        <Text intent='teritary' uppercase={true} size='secondaryHeader'
        bold={true}>
          <h3>What do they say about us?</h3>
        </Text>
        <Text intent='teritary' size='large'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </Text>
      </div>
      <div className='h-[40rem] flex max-[1270px]:py-[4rem]
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
    </div>
  )
}

export default Testimonials