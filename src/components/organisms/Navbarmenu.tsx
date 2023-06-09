'use client'

import React, { FC, useState } from 'react'
import Text from '@atoms/Text'
import Navbar from './Navbar'
import Link from 'next/link'
import { 
  menuItems, Props as MenuItemsProps 
  } from '@utils/MenuItems'
import { 
  AiOutlineShopping, AiOutlineSearch, AiOutlineMenu
 } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'

interface Props {}

const Navbarmenu: FC<Props> = ({}) => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

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
          {menuItems.map((item: MenuItemsProps) => (
            <Link href={item.title}>
              <Text intent='primary' uppercase={true} size='extrasmall'>
                <p className='underline-on-hover'>{item.name}</p>
              </Text>
            </Link>
          ))}
          </div>
        </div> 
        <div className='flex flex-row justify-around
        w-[15rem] items-center max-[700px]:hidden max-[700px]:w-auto'>
          <Link href='/support'>
            <Text intent='secondary' size='extrasmall'>
              <p className='hover:text-white duration-150
              underline-on-hover'>Support</p>
            </Text>
          </Link>
          <AiOutlineSearch className='text-[1.75rem] text-white' />
          <AiOutlineShopping className='text-[1.75rem] text-white' />
        </div>
        <button onClick={toggleMenu} className='min-[700px]:hidden'>
          <AiOutlineMenu className='text-white text-2xl min-[700px]:hidden' />
        </button>
        <div className={`bg-white absolute right-0 top-0 duration-300 shadow-md pt-28
        w-[100vw] h-[100vh] min-[700px]:hidden flex flex-col justify-start items-center
        gap-6 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
          <button onClick={toggleMenu}>
            <GrClose className='absolute top-8 right-8 text-2xl text-black' />
          </button>
          {menuItems.map((item: MenuItemsProps) => (
            <Link href={item.title} className='w-[70%] text-right'>
              <Text intent='teritary' uppercase={true} size='large'>
                <p className='underline-on-hover'>{item.name}</p>
              </Text>
            </Link>
          ))}
        </div>
      </Navbar>
      <div className='bg-black h-[2.4rem] flex justify-center items-center
      relative top-20 z-10'>
        <Text intent='primary' size='extrasmall'>
          <p>Free shipping over €100</p>
        </Text>
      </div>
    </>
  )
}

export default Navbarmenu