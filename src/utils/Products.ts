export interface Props {
  id: number,
  title: string,
  description: string,
  image: any,
  price: string
}

export const products: Props[] = [
  { id: 1, title: 'Product', description: 'Product description', image: '/../../public/noimage.jpg', price: '25.99$'},
  { id: 2, title: 'Product', description: 'Product description', image: '/../../public/noimage.jpg', price: '25.99$'},
  { id: 3, title: 'Product', description: 'Product description', image: '/../../public/noimage.jpg', price: '25.99$'},
]