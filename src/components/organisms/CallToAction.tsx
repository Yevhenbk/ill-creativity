import React, { FC } from 'react'
import Link from 'next/link'
import Text from '@atoms/Text'
import Button from '@molecules/Button'

interface Props {}

const CallToAction: FC<Props> = ({}) => {
  return (
    <div className='flex flex-col justify-start
    items-center h-[28rem] gap-12 bg-[#F2F4F5]'>
      <Text intent='teritary' size='large'>
        <p>Tagline</p>
      </Text>
      <Text intent='teritary' size='teritaryHeader' 
      uppercase={true} bold={true}>
        <p className='w-[40rem] text-center max-[800px]:w-[20rem]'>
          Long headline to turn your visitors into users
        </p>
      </Text>
      <Link href='/shop'>
        <Button intent='primary' fullWidth={false}>
          <Text intent='quinary' uppercase={true} size='small'>
            Shop Now
          </Text>
        </Button>
      </Link>
    </div>
  )
}

export default CallToAction