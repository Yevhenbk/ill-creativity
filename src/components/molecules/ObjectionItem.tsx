'use client'

import React, { FC, useState } from 'react'
import Text from '@atoms/Text'
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai'

interface Props {
  id: number,
  index: number,
  question: string,
  answer: string
}

const ObjectionItem: FC<Props> = (props) => {

  const [expandedObjId, setExpandedObjId] = useState<null | number>(null)

  const handleObjClick = (objId: number) => {
    if (expandedObjId === objId) {
      setExpandedObjId(null)
    } else {
      setExpandedObjId(objId)
    }
  }

  return (
    <div>
      <div
        className={`objection ${props.index > 0 && 'border-t-2 border-gray-200'} flex flex-row
        justify-between items py-[1.75rem] hover:cursor-pointer`}
        onClick={() => handleObjClick(props.id)}
      >
        <Text intent='teritary' size='extralarge' italic={false}>
          <p>{props.question}</p>
        </Text>
        {expandedObjId === props.id
        ? <AiOutlineDown className='text-xl max-[800px]:ml-8' /> 
        :  <AiOutlineRight className='text-xl max-[800px]:ml-8' />}
      </div>
      <div
        className={`answer ${
          expandedObjId === props.id 
          ? 'max-h-96 transition-all duration-500 ease-in-out pt-4 pb-8' 
          : 'max-h-0 overflow-hidden transition-all duration-500 ease-in-out'
        }`}
      >
        <Text intent='teritary' size='large' italic={true}>
          <p>{props.answer}</p>
        </Text> 
      </div>
    </div>
  )
}

export default ObjectionItem