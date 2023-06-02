import React, { FC } from 'react'
import Text from '@atoms/Text'
import Navbar from '@organisms/Navbar'
import { 
  menuItems, Props as MenuItemsProps 
  } from '@utils/MenuItems'

interface Props {}

const Home: FC<Props> = ({}) => {
  return (
    <main>
      <Navbar>
        <div className='flex flex-row justify-around
        w-[25rem] items-center'>
          <Text intent='primary' uppercase={true} size='large'
          italic={true} bold={true}>
            <h2>/ Logo</h2>
          </Text>
          {menuItems.map((item: MenuItemsProps) => (
            <Text intent='primary' uppercase={true} size='extrasmall'>
              <p>{item.name}</p>
            </Text>
          ))}
        </div> 
        <div className='flex flex-row justify-around
        w-[18rem] items-center'>
          <Text intent='secondary' size='extrasmall'>
            <p>Support</p>
          </Text>
          <Text intent='primary' size='extrasmall'>
            <p>Icon one</p>
          </Text>
          <Text intent='primary' size='extrasmall'>
            <p>Icon two</p>
          </Text>
        </div>
      </Navbar>
    </main>
  )
}

export default Home
