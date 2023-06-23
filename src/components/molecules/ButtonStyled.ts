import { cva } from 'class-variance-authority'

export const buttonStyles = cva(
  ['text-xl p-[.85rem] flex items-center justify-center shadow-sm',
  'relative transition duration-300 transform transition ease-out',],
  {
    variants: {
      intent: {
        primary: 'bg-black border-2 border-black rounded-lg hover:text-black text-white hover:bg-[#F4AE4F]',
        secondary: ['bg-black border-2 border-white flex justify-between',
        'hover:bg-white hover:text-black text-white w-[15rem] h-[3rem] rounded-lg'],
        teritary: 'bg-black border-2 border-black rounded-md hover:text-black text-white hover:bg-[#F4AE4F] w-[8rem] h-[2.5rem]',
        quaternary: 'bg-transparent w-[8rem] h-[2.25rem] border-2 border-black rounded-full hover:bg-black hover:text-white',
        quinary: 'bg-transparent border-2 border-gray-200 rounded-lg hover:border-black text-gray-600 hover:text-black'
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