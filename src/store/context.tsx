'use client'

import { 
  createContext, useState, ReactNode, useEffect, useRef
 } from 'react'

export const Context = createContext<any>('')

interface Props {
  children: ReactNode
}

interface CartItem {
  id: number
  title: string
  description: string
  quantity: number
  image: string
  price: string
}

const ContextProvider: React.FC<Props> = (props) => {

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const calculateTotalPrice = () => {
    let totalPrice = 0
    for (const item of cartItems) {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''))
      totalPrice += price * item.quantity
    }
    return totalPrice.toFixed(2)
  }

  return (
    <Context.Provider 
      value={{ cartItems, setCartItems, calculateTotalPrice }}
    >
      {props.children}
    </Context.Provider>
  )  
}

export default ContextProvider