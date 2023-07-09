'use client'

import React, { FC, useEffect } from 'react'
import Text from '@atoms/Text'
import Button from '@molecules/Button'
import Link from 'next/link'
import { 
  AiOutlineRight, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'

interface Props {}

const Footer: FC<Props> = ({}) => {

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <button
      className='flex justify-center items-center w-[100%]
      py-4 overflow-hidden bg-[#F4AE4F] border-t-2 border-black
      transition duration-300 transform ease-out'
      onClick={scrollToTop}
    >
      <Text intent='quinary' uppercase={true} size='medium'>
        Scroll To Top
      </Text>
    </button>
    <div className='bg-black h-[25rem] flex flex-row
    justify-around items-center max-[950px]:h-auto
    max-[950px]:py-12'>
      <div className='flex flex-row justify-around w-[90%]
      items-start max-[950px]:flex-col-reverse max-[950px]:gap-12
      max-[950px]:w-[80%]'>
        <Text intent='primary'size='extralarge' bold={true}
        uppercase={true} italic={true}>
          / Logo
        </Text>
        <div className='flex flex-col gap-4'>
          <Text intent='primary' size='medium' uppercase={true}>
            <p className='pb-2'>Office</p>
          </Text>
          <Text intent='secondary' size='small'>
            <p>High Street North East Ham</p>
          </Text>
          <Text intent='secondary' size='small'>
            <p>London, United Kingdom EMA 2JA</p>
          </Text>
          <Text intent='secondary' size='small'>
            <p>6733 182-184</p>
          </Text>
        </div>
        <div className='flex flex-col gap-4'>
          <Text intent='primary' size='medium' uppercase={true}>
            <p className='pb-2'>Contact</p>
          </Text>
          <Button intent='secondary' fullWidth={false}>
            <Text intent='quinary' size='large'>
              <p>Email Us</p>
            </Text>
            <AiOutlineRight className='text-xl' />
          </Button>
          <div className='flex justify-left items-center
          text-[#909090] text-2xl gap-6 pt-2'>
            <Link href=''>
              <AiOutlineFacebook className='hover:cursor-pointer
              hover:text-white' />
            </Link>
            <Link href=''>
              <AiOutlineInstagram className='hover:cursor-pointer
              hover:text-white' />
            </Link> 
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer