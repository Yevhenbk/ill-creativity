import { cva } from 'class-variance-authority'

export const textStyles = cva(
  ['text-xl'],
  {
    variants: {
      intent: {
        primary: 'text-[#57A6CA]',
        secondary: 'text-pink-700',
        teritary: 'text-white',
        quaternary: 'text-[#FE7F5F]'
      },
      fullWidth: {
        true: 'w-[100%]'
      }  
    },
    defaultVariants: {
      intent: 'primary'
    }
  }  
)