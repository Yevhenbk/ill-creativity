import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode  
}
const Navbar: FC<Props> = (props) => {
  return (
    <div
      className='w-[100%] h-20 bg-black border-b-[1px]
      border-[#2c2c2d] flex flex-row justify-around items-center'
    >
      {props.children}
    </div>
  )
}

export default Navbar