import React, { FC } from 'react'
import SelectedProduct from '@molecules/SelectedProduct'
import { 
  products, Props as ProductProps
 } from '@utils/Products'
import noimage from '../../../public/noimage.jpg'

interface Props {}

const SelectedProducts: FC<Props> = ({}) => {
  return (
    <div className='grid grid-cols-3'>
      {products.map((item: ProductProps) => (
        <SelectedProduct title={item.title} description={item.description}
        price={item.price} image={noimage} alt='Product Image' />
      ))}  
    </div>
  )
}

export default SelectedProducts