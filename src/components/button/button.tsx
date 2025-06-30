import clsx from "clsx"
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"
import s from './button.module.scss'


export const buttonVariant = ['primary', 'secondary', 'outline', 'text_button'] as const
export type ButtonVariant = (typeof buttonVariant)[number]

export type ButtonOwnProps<T extends ElementType = 'button'> = {
  /**  * The element or component to render as. For example, 'button', 'a' etc. Default = 'button */
  as?: T
  /**  * Makes the button take up the full width of its container. */
  fullWidth?: boolean
  /**  * Visual style variant of the button.*/
  variant?: ButtonVariant
  /**  * Disables the button.*/
  disabled?: boolean
  /**  **Required**: Button content.*/
  children: ReactNode
} 

export type ButtonProps<T extends ElementType = 'button'> = 
  ButtonOwnProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>

export const Button = <T extends ElementType = 'button'>({  
  as,
  children,
  disabled = false,
  fullWidth = false,
  className,
  variant = 'primary',
  ...rest}: ButtonProps<T>) => {

  const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)
  const Component = (as || 'button') as ElementType
  return <Component className={classNames} {...rest} >{children}</Component>
}

// import { ComponentPropsWithoutRef, ElementType } from 'react'

// import { clsx } from 'clsx'

// import s from './button.module.scss'

// export const buttonVariant = ['icon', 'link', 'primary', 'secondary', 'tertiary'] as const

// export type ButtonVariant = (typeof buttonVariant)[number]

// export type ButtonProps<T extends ElementType = 'button'> = {
//   as?: T
//   fullWidth?: boolean
//   variant?: ButtonVariant
// } & ComponentPropsWithoutRef<T>

// export const Button = <T extends ElementType = 'button'>({}: ButtonProps<T>) => {
//   const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

//   const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

//   return <Component className={classNames} {...rest} />
// }