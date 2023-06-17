import { cva } from 'class-variance-authority'

export const textStyles = cva(
  ['p-0 m-0'],
  {
    variants: {
      intent: {
        primary: 'text-white',
        secondary: 'text-[#909090]',
        teritary: 'text-black',
        quaternary: 'text-[#F4AE4F]',
        quinary: '',
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
        header: 'text-5xl',
        secondaryHeader: 'text-2xl',
        teritaryHeader: 'text-4xl'
      }  
    },
    defaultVariants: {
      intent: 'primary'
    }
  }  
)