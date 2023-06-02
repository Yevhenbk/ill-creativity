import React, { FC } from 'react'
import Text from '@atoms/Text'
import Navbar from '@organisms/Navbar'
import Slider from '@organisms/Slider'
import Link from 'next/link'
import { 
  menuItems, Props as MenuItemsProps 
  } from '@utils/MenuItems'
import { 
  AiOutlineShopping, AiOutlineSearch
 } from 'react-icons/ai'
import example from '../../public/linearBackground.jpg'

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <main>
      <Navbar>
        <div className='flex flex-row justify-around
        w-[25rem] items-center'>
          <Link href='/'>
            <Text intent='primary' uppercase={true} size='large'
            italic={true} bold={true}>
              <h2>/ Logo</h2>
            </Text>
          </Link>
          {menuItems.map((item: MenuItemsProps) => (
            <Link href={item.title}>
              <Text intent='primary' uppercase={true} size='extrasmall'>
                <p className='underline-on-hover'>{item.name}</p>
              </Text>
            </Link>
          ))}
        </div> 
        <div className='flex flex-row justify-around
        w-[15rem] items-center'>
          <Link href='/support'>
            <Text intent='secondary' size='extrasmall'>
              <p className='hover:text-white duration-150
              underline-on-hover'>Support</p>
            </Text>
          </Link>
          <AiOutlineSearch className='text-[1.75rem] text-white' />
          <AiOutlineShopping className='text-[1.75rem] text-white' />
        </div>
      </Navbar>
      <div className='bg-black h-[2.4rem] flex justify-center items-center
      relative top-20 z-10'>
        <Text intent='primary' size='extrasmall'>
          <p>Free shipping over €100</p>
        </Text>
      </div>
      <div className='relative top-20'>
        <Slider />
      </div>
    </main>
  )
}

export default Home
