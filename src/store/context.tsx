import { 
  createContext, useState, ReactNode, useEffect, useRef
 } from 'react'

export const Context = createContext<any>('')

interface Props {
  children: ReactNode
}

const ContextProvider: React.FC<Props> = (props) => {

  const text: string = 'bohoo'

  return (
    <Context.Provider 
      value={{ text }}
    >
      {props.children}
    </Context.Provider>
  )  
}

export default ContextProvider