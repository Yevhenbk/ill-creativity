import React, { FC } from 'react'
import Text from '@atoms/Text'
import SelectedProduct from '@molecules/SelectedProduct'
import Button from '@molecules/Button'
import Link from 'next/link'
import { 
  products, Props as ProductProps
 } from '@utils/Products'

interface Props {}

const SelectedProducts: FC<Props> = ({}) => {

  const firstThreeProducts = products.slice(0, 3)

  return (
    <div className='bg-[#F2F4F5] pt-20'>
      <div className='w-[100%] flex flex-col items-center gap-5
      text-center max-[700px]:px-8'>
        <Text intent='teritary' uppercase={true} size='secondaryHeader'
        bold={true}>
          <h3>Selected Products</h3>
        </Text>
        <Text intent='teritary' size='large'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </Text>
        <Link href='/shop'>
          <Button intent='quaternary' fullWidth={false}>
            <Text intent='quinary' uppercase={true} size='small'>
              See more
            </Text>
          </Button>
        </Link>
      </div>
      <div className='grid grid-cols-3 max-[700px]:flex max-[700px]:flex-col
       items-center justify-items-center pb-20 pt-16 max-[700px]:gap-y-8'>
        {firstThreeProducts.map((item: ProductProps) => (
          <SelectedProduct title={item.title} description={item.description}
          price={item.price} image={item.image} alt='Product Image' productId={item.id}/>
        ))}  
      </div>
    </div>
  )
}

export default SelectedProducts