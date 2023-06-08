import { cva } from 'class-variance-authority'

export const buttonStyles = cva(
  ['text-xl p-[1rem] flex items-center justify-center shadow-sm',
  'relative transition duration-300 transform transition ease-out',],
  {
    variants: {
      intent: {
        primary: 'bg-black',
        secondary: ['bg-black border-2 border-white flex justify-between',
        'hover:bg-white hover:text-black text-white w-[15rem] h-[3rem]']
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