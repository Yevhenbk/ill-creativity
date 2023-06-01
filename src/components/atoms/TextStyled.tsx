import { cva } from 'class-variance-authority'

export const textStyles = cva(
  ['p-0 m-0'],
  {
    variants: {
      intent: {
        primary: 'text-white',
        secondary: 'text-[#909090]',
        teritary: 'text-white',
        quaternary: 'text-[#FE7F5F]'
      },
      uppercase: {
        true: 'uppercase'
      },
      italic: {
        true: 'italic'
      },
      bold: {
        true: 'font-bold'
      },
      size: {
        extrasmall: 'text-xs',
        small: 'text-sm',
        medium: 'text-md',
        large: 'text-lg',
        extralarge: 'text-xl',
      }  
    },
    defaultVariants: {
      intent: 'primary'
    }
  }  
)