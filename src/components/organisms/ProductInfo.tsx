import React, { FC } from 'react'
import Image from 'next/image'
import Text from '@atoms/Text'
import Button from '@molecules/Button'
import { AiOutlineStar } from 'react-icons/ai'
import noimage from '../../../public/noimage.jpg'
// import Comments from '@molecules/Comments'
// import ProductComments from './ProductComments'

interface Props {
  productId: number,
  commentId: number,
  commentedId: number,
  title: string,
  description: string,
  price: string,
  info: string
}

const ProductInfo: FC<Props> = (props) => {
  return (
    <div className='grid grid-cols-2 w-[80vw] py-20'>
      <Image src={noimage} alt='image' className='object-cover h-[40rem]'/>
      <div className='flex flex-col ml-12 gap-12'>
        <div className='flex flex-col gap-2'>
          <Text intent='teritary' uppercase={true} size='secondaryHeader'
          bold={true}>
            {props.title}
          </Text>
          <div className='flex flex-row'>
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <Text intent='teritary' size='extrasmall'>
              <p className='pl-2'>(no comments yet)</p>
            </Text>
          </div>
          <Text intent='teritary' uppercase={true} size='large'
          bold={true}>
            {props.price}
          </Text>
        </div>
        <Text intent='teritary' size='large'>
          {props.info}
        </Text>
        <Text intent='teritary' size='extralarge' bold={true}>
          {props.description}
        </Text>
        <Button intent='primary' fullWidth={true}>
          <Text intent='primary' uppercase={true} size='small'>
            Add to Cart
          </Text>
        </Button>
        <div className='flex flex-col gap-5 pt-20'>
          <Text intent='teritary' uppercase={true} size='secondaryHeader'
          bold={true}>
            <p>Comments</p>
          </Text>
          <Text intent='teritary' size='medium'>
            <p>(no comments yet)</p>
          </Text>
          {/* <Comments productId={props.commentId} />
          <ProductComments productId={props.commentedId} /> */}
        </div>
      </div>
    </div>
  )
}

export default ProductInfo