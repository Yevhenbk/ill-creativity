import React, { FC } from 'react'
import Product from '@molecules/Product'
import Text from '@atoms/Text'
import { 
  products, Props as ProductProps
 } from '@utils/Products'

interface Props {}

const ProductList: FC<Props> = () => {
  return (
    <div className='py-16 overflow-hidden'>
      <Text intent='teritary' uppercase={true} bold={true}
      size='header'>
        <h1 className='w-[100%] text-center'>Shop All</h1>  
      </Text>
      <div className='grid grid-cols-3 pt-16'>
        {products.map((item: ProductProps) => (
          <Product key={item.id} title={item.title}
          description={item.description} price={item.price} 
          productId={item.id} />
        ))}
      </div>
    </div>
  )
}
  
export default ProductList