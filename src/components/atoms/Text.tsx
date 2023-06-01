import React, { FC, ReactNode } from 'react'
import { VariantProps } from 'class-variance-authority'
import { textStyles } from './TextStyled'

interface Props extends 
  VariantProps<typeof textStyles> {
    children: ReactNode
  }  

const Text: FC<Props> = ({ intent, fullWidth, ...props }) => {
  return (
    <div
      className={textStyles({ intent, fullWidth })}
    >
      {props.children}
    </div>
  )
}

export default Text