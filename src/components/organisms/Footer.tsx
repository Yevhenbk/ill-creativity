import React, { FC } from 'react'
import Text from '@atoms/Text'
import Button from '@molecules/Button'
import { 
  AiOutlineRight, AiOutlineInstagram, AiOutlineFacebook,
  AiOutlineTwitter } from 'react-icons/ai'

interface Props {}

const Footer: FC<Props> = ({}) => {
  return (
    <div className='bg-black h-[25rem] flex flex-row
    justify-around items-center'>
      <div className='flex flex-row justify-around w-[90%]
      items-start'>
        <Text intent='primary'size='extralarge' bold={true}
        uppercase={true} italic={true}>
          / Logo
        </Text>
        <div className='flex flex-col gap-4'>
          <Text intent='primary' size='medium' uppercase={true}>
            <p className='pb-2'>First column</p>
          </Text>
          <Text intent='secondary' size='small'>
            <p>First page</p>
          </Text>
          <Text intent='secondary' size='small'>
            <p>Second page</p>
          </Text>
          <Text intent='secondary' size='small'>
            <p>Third page</p>
          </Text>
        </div>
        <div className='flex flex-col gap-4'>
          <Text intent='primary' size='medium' uppercase={true}>
            <p className='pb-2'>Second column</p>
          </Text>
          <Text intent='secondary' size='small'>
            <p>First page</p>
          </Text>
          <Text intent='secondary' size='small'>
            <p>Second page</p>
          </Text>
          <Text intent='secondary' size='small'>
            <p>Third page</p>
          </Text>
        </div>
        <div className='flex flex-col gap-4'>
          <Text intent='primary' size='medium' uppercase={true}>
            <p className='pb-2'>Contact</p>
          </Text>
          <Button intent='secondary' fullWidth={false}>
            <Text intent='quaternary' size='large'>
              <p>Email Us</p>
            </Text>
            <AiOutlineRight className='text-xl' />
          </Button>
          <div className='flex justify-left items-center
          text-[#909090] text-2xl gap-6 pt-2'>
            <AiOutlineFacebook className='hover:cursor-pointer
            hover:text-white' />
            <AiOutlineInstagram className='hover:cursor-pointer
            hover:text-white' />
            <AiOutlineTwitter className='hover:cursor-pointer
            hover:text-white' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer