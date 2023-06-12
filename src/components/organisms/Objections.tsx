import React, { FC } from 'react'
import Text from '@atoms/Text'
import ObjectionItem from '@molecules/ObjectionItem'
import { 
  objections, Props as ObjectionsProps
 } from '@utils/Objections'

interface Props {}

const Objections: FC<Props> = ({}) => {

  return (
    <div className='min-h-[50rem] flex flex-col items-center justify-start
    gap-20 pb-40 max-[800px]:py-12'>
      <div className='w-[40rem] flex flex-col gap-12 text-left
      items-start max-[800px]:w-[20rem]'>
        <Text intent='teritary' uppercase={true} bold={true}
        size='teritaryHeader'>
        <h4>
          Short headline
        </h4>  
        </Text>
        <Text intent='teritary' size='extralarge'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nulla itaque porro nostrum aliquid modi obcaecati consectetur.
        </p>  
        </Text>
      </div> 
      <div className='w-[40rem] flex flex-col gap-0 max-[800px]:w-[20rem]'>
        {objections.map((item: ObjectionsProps, index: number) => (
          <ObjectionItem key={index} index={index} id={item.id} question={item.question}
          answer={item.answer} />
        ))}
      </div>
    </div>
  )
}

export default Objections