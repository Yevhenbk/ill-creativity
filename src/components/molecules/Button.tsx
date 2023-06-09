import React, { FC, ReactNode, MouseEventHandler } from 'react'
import { VariantProps } from 'class-variance-authority'
import { buttonStyles } from './ButtonStyled'

interface Props extends 
  VariantProps<typeof buttonStyles> {
    onClick?: MouseEventHandler<HTMLButtonElement>,
    children: ReactNode,
    type?: 'button' | 'submit' | 'reset' | undefined,
    disabled?: any
  }  

const Button: FC<Props> = ({ intent, fullWidth, ...props }) => {
  return (
    <button
      type={props.type}
      className={buttonStyles({ intent, fullWidth })}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button