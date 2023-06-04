export interface Props {
  title: string,
  description: string,
  image: string,
  price: string
}

export const Products: Props[] = [
  { title: 'Product', description: 'Product description', image: 'black', price: '25.99$'},
  { title: 'Product', description: 'Product description', image: 'gray', price: '25.99$'},
  { title: 'Product', description: 'Product description', image: 'white', price: '25.99$'},
]