'use client'

import React, { FC, useState } from 'react'
import Text from '@atoms/Text'
import { 
  objections, Props as ObjectionsProps
 } from '@utils/Objections'
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai'

interface Props {}

const Objections: FC<Props> = ({}) => {

  const [expandedObjId, setExpandedObjId] = useState<any>(null)

  const handleObjClick = (objId: any) => {
    if (expandedObjId === objId) {
      setExpandedObjId(null)
    } else {
      setExpandedObjId(objId)
    }
  }

  return (
    <div className='h-[50rem] flex flex-col items-center justify-start
    gap-20'>
      <div className='w-[40rem] flex flex-col gap-12 text-left
      items-start'>
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
      <div className='w-[40rem] flex flex-col gap-0'>
        {objections.map((item: ObjectionsProps, index) => (
          <div key={item.id}>
            <div
              className={`objection ${index > 0 && 'border-t-2 border-gray-200'} flex flex-row
              justify-between items py-[1.75rem] hover:cursor-pointer`}
              onClick={() => handleObjClick(item.id)}
            >
              <Text intent='teritary' size='extralarge' italic={false}>
                <p>{item.question}</p>
              </Text>
              {expandedObjId === item.id
              ? <AiOutlineDown className='text-xl' /> 
              :  <AiOutlineRight className='text-xl' />}
            </div>
            <div
              className={`answer ${
                expandedObjId === item.id 
                ? 'max-h-96 transition-all duration-500 ease-in-out pt-4 pb-8' 
                : 'max-h-0 overflow-hidden transition-all duration-500 ease-in-out'
              }`}
            >
              <Text intent='teritary' size='large' italic={true}>
                <p>{item.answer}</p>
              </Text> 
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Objections