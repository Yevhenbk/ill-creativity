export interface Props {
  id: number,
  name: string,
  review: string,
  description: string  
}

export const testimonials: Props[] = [
  { id: 1, name: 'Maaz Hasib', description: 'Description',
  review: 'I had a seamless and enjoyable shopping experience at Illuminatingcreativity. The user-friendly website allowed me to browse a wide range of products. The detailed and accurate descriptions helped me make informed decisions. Fast shipping and well-packaged delivery.' }, 
  { id: 2, name: 'José Ortiz', description: 'Description',
  review: 'Illuminatingcreativity is my go-to online store. The extensive selection and well-designed website make it easy to find what I need. The products are of exceptional quality, durable, and exactly as described. Prompt shipping and perfect condition upon arrival. Highly trustworthy and recommended!' }, 
  { id: 3, name: 'Your name', description: 'Description',
  review: 'Illuminatingcreativity offers a delightful shopping experience. User-friendly website, diverse products. Outstanding product quality, surpassing expectations. Responsive, friendly customer service. Prompt shipping, perfect packaging. Top choice for quality products, exceptional service!' },  
]