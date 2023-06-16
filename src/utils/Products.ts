export interface Props {
  id: number,
  title: string,
  description: string,
  image: any,
  price: string,
  info: string
}

export const products: Props[] = [
  { id: 1, title: 'Product', description: 'Product description', image: '/../../public/noimage.jpg', price: '21.99$',
  info: 'An aesthetic way to stay organised, draw doodles, write cute notes in your own fully customizable way. It’s bright, can change colour, portable and reusable meaning you will never need to use a boring whiteboard and paper ever AGAIN!'},
  { id: 2, title: 'Product', description: 'Product description', image: '/../../public/noimage.jpg', price: '25.99$',
  info: 'An aesthetic way to stay organised, draw doodles, write cute notes in your own fully customizable way. It’s bright, can change colour, portable and reusable meaning you will never need to use a boring whiteboard and paper ever AGAIN!'},
  { id: 3, title: 'Product', description: 'Product description', image: '/../../public/noimage.jpg', price: '22.99$',
  info: 'An aesthetic way to stay organised, draw doodles, write cute notes in your own fully customizable way. It’s bright, can change colour, portable and reusable meaning you will never need to use a boring whiteboard and paper ever AGAIN!'},
]