import React, { FC } from 'react'
import SelectedProduct from '@molecules/SelectedProduct'
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
      <div className='w-[100%] grid grid-cols-3 pt-16
      items-center justify-items-center gap-y-12 pb-8'>
        {products.map((item: ProductProps) => (
          <SelectedProduct key={item.id} title={item.title}
          description={item.description} price={item.price} 
          productId={item.id} image={item.image} alt={item.title} />
        ))}
      </div>
    </div>
  )
}
  
export default ProductList