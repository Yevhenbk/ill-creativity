'use client'

import React, { FC, useState, useContext } from 'react'
import Text from '@atoms/Text'
import Navbar from './Navbar'
import { Context } from '@store/context'
import Link from 'next/link'
import { 
  menuItems, Props as MenuItemsProps 
  } from '@utils/MenuItems'
import { 
  AiOutlineShopping, AiOutlineMenu,
  AiOutlineLeft
 } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'

interface Props {}

const Navbarmenu: FC<Props> = ({}) => {

  const { cartItems } = useContext(Context)

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const itemCount = cartItems.length

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <Navbar>
        <div className='flex flex-row justify-around
        w-[25rem] items-center max-[700px]:w-auto relative'>
          <Link href='/'>
            <Text intent='primary' uppercase={true} size='large'
            italic={true} bold={true}>
              <h2>/ Logo</h2>
            </Text>
          </Link>
          <div className='flex justify-around w-[70%] items-center
          max-[700px]:hidden'>
          {menuItems.map((item: MenuItemsProps, index: number) => (
            <Link key={index} href={item.title}>
              <Text intent='primary' uppercase={true} size='extrasmall'>
                <p className='underline-on-hover'>{item.name}</p>
              </Text>
            </Link>
          ))}
          </div>
        </div> 
        <div className='flex flex-row justify-around
        w-[15rem] items-center max-[700px]:hidden max-[700px]:w-auto'>
          <Link href='/shipping'>
            <Text intent='secondary' size='extrasmall'>
              <p className='hover:text-white duration-150
              underline-on-hover'>Shipping</p>
            </Text>
          </Link>
          <Link href='/cart' className='flex relative'>
            <AiOutlineShopping className='text-[1.75rem] text-white hover:cursor-pointer' />
            {cartItems.length !== 0 ? 
              <div className='absolute w-4 h-4 rounded-full bg-[#F4AE4F] text-black
              flex items-center justify-center text-xs -bottom-1 -left-1'>
                {itemCount}
              </div> 
            : <></>}
          </Link>
        </div>
        <button onClick={toggleMenu} className='min-[700px]:hidden'>
          <AiOutlineMenu className='text-white text-2xl min-[700px]:hidden' />
        </button>
        <div className={`bg-white absolute right-0 top-0 duration-300 shadow-md pt-28
        w-[100vw] h-[100vh] min-[700px]:hidden flex flex-col justify-start items-center
        gap-2 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
          <button onClick={toggleMenu}>
            <GrClose className='absolute top-8 right-8 text-2xl text-black' />
          </button>
          {menuItems.map((item: MenuItemsProps, index: number) => (
            <Link key={index} href={item.title} className='w-[80%] text-right bg-black py-2 px-4
            flex flex-row-reverse items-center justify-between rounded-lg text-white hover:text-black
            hover:bg-[#F4AE4F] border-2 border-black'>
              <Text intent='quinary' uppercase={true} size='large'>
                <p>{item.name}</p>
              </Text>
              <AiOutlineLeft className='text-xl' />
            </Link>
          ))}
          <Link href='/shipping' className='text-right w-[70%] mt-12'>
            <Text intent='teritary' size='small' uppercase={true}>
              <p>Shipping</p>
            </Text>
          </Link>
          <div className='w-[70%] flex flex-col items-end text-black gap-5 pt-6'>
          <Link href='/cart'>
            <div className='flex flex-row-reverse items-center w-[6rem] justify-between'>
             <AiOutlineShopping className='text-2xl' />
             <Text intent='teritary' size='small'>
              <p>Cart</p>
            </Text>
            </div>
          </Link>
          </div>
        </div>
      </Navbar>
      <div className='bg-black h-[2.4rem] flex justify-center items-center
      relative top-20 z-10'>
        <Text intent='primary' size='extrasmall'>
          <p>Free shipping</p>
        </Text>
      </div>
    </>
  )
}

export default Navbarmenu