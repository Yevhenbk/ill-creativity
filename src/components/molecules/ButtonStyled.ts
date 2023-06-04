import { cva } from 'class-variance-authority'

export const buttonStyles = cva(
  ['text-xl p-[1rem] flex items-center justify-center shadow-sm',
  'relative transition duration-300 transform transition ease-out',],
  {
    variants: {
      intent: {
        primary: 'bg-black',
        secondary: 'bg-[#FEAFE7] text-pink-700',
        teritary: 'bg-[#CFABF8] text-white',
        quaternary: 'bg-[#FED8C5] text-[#FE7F5F]'
      },
      fullWidth: {
        true: 'w-[100%]',
        false: 'w-[12rem]'
      }  
    },
    defaultVariants: {
      intent: 'primary'
    }
  }  
)