export interface Props {
  id: number,
  question: string,
  answer: string  
}

export const objections: Props[] = [
  { id: 1, question: 'Is shipping free?', answer: 'Yes, shipping is completely free.'},  
  { id: 2, question: 'Can I return the product?', answer: 'Yes, you can return the product within 30 days of purchase.'},  
  { id: 3, question: 'How long does shipping take?', answer: 'Shipping typically takes 3-5 business days.'},  
  { id: 4, question: 'What payment methods do you accept?', answer: 'We accept major credit cards and PayPal.'},  
  { id: 5, question: 'Do you offer international shipping?', answer: 'Yes, we offer international shipping to select countries.'},  
]