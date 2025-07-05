import { InputHTMLAttributes, useState } from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

import { UniversalIcon } from '../common/unversalIcon/UniversalIcon'

type InputVariant = 'search' | 'email' | 'password' | 'text'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type: InputVariant
  label?: string
  error?: boolean
  errorText?: string
  fullWidth?: boolean
}

export const Input = ({
  id,
  label,
  type,
  errorText,
  disabled = false,
  fullWidth = false,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const containerClassNames = clsx(s.inputContainer, errorText && s.error, fullWidth && s.fullWidth)

  const isPassword = type === 'password'
  const isSearch = type === 'search'
  let inputType: string

  if (isPassword) {
    if (showPassword) {
      inputType = 'text'
    } else {
      inputType = 'password'
    }
  } else {
    inputType = type
  }

  return (
    <div className={s.wrapper}>
      {label && (
        <label htmlFor={id} className={s.label} data-disabled={disabled}>
          {label}
        </label>
      )}
      <div className={containerClassNames} data-disabled={disabled}>
        {isSearch && (
          <span className={s.icon} data-disabled={disabled}>
            <UniversalIcon name={'search'} />
          </span>
        )}
        <input
          id={id}
          type={inputType}
          className={s.input}
          {...rest}
        />

        {isPassword && (
          <button
            type={'button'}
            className={s.iconButton}
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'hide' : 'show'}
          >
            {showPassword ? <UniversalIcon name={'eye-outline'} /> : <UniversalIcon name={'eye-off-outline'} />}
          </button>
        )}
      </div>

      {errorText && <div className={s.errorText}>{errorText}</div>}
    </div>
  )
}
