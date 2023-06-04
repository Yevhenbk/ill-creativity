import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode  
}

const Wrapper: FC<Props> = (props) => {
  return (
    <div className='relative top-20'>
      {props.children}  
    </div>
  )
}

export default Wrapper