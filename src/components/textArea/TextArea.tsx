import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './textArea.module.scss'

export const textAreaVariant = ['default']

export type TextAreaVariant = (typeof textAreaVariant)[number]

export type TextAreaProps<T extends ElementType = 'textarea'> = {
  /**
   * Custom component or HTML element to render instead of the default 'textarea'.
   * Useful for styling or using a wrapper component.
   */
  as?: T
  /**
   * Visual style variant for the TextArea (e.g. 'default', etc.).
   */
  variant?: TextAreaVariant
  /**
   * Label text displayed above the TextArea.
   */
  label?: string
  /**
   * If true, displays the component in an error state.
   */
  error?: boolean
  /**
   * Error message shown below the TextArea when `error` is true.
   */
  errorText?: string
  /**
   * If true, makes the TextArea take up the full width of its container.
   */
  fullWidth?: boolean
  /**
   * **Required**: Id for Text area.
   */
  id: string
  asChild?: boolean
} & ComponentPropsWithoutRef<T>

export const TextAreaComponent = <T extends ElementType = 'textarea'>(props: TextAreaProps<T>) => {
  const {
    className,
    variant = 'default',
    label,
    error,
    errorText,
    disabled = false,
    fullWidth = false,
    id,
    ...rest
  } = props

  const classNames = clsx(
    s.textArea,
    error ? s.error : s[variant],
    disabled && s.disabled,
    fullWidth && s.fullWidth,
    className
  )

  return (
    <div className={s.bodyTextArea}>
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea className={classNames} disabled={disabled} id={id} {...rest} />
      {error && errorText && <div className={s.errorText}>{errorText}</div>}
    </div>
  )
}
