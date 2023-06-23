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
}

const ContextProvider: React.FC<Props> = (props) => {

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  // Function to remove a product from the cart
  const removeFromCart = (productId: any) => {
    setCartItems((prevCartItems: any) =>
      prevCartItems.filter((item: any) => item.id !== productId)
    )
  }

  return (
    <Context.Provider 
      value={{ cartItems, setCartItems, removeFromCart }}
    >
      {props.children}
    </Context.Provider>
  )  
}

export default ContextProvider