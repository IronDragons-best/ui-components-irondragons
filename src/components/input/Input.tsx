import { InputHTMLAttributes, useState } from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

import { UniversalIcon } from '../common/unversalIcon/UniversalIcon'

type InputVariant = 'search' | 'email' | 'password'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  type: InputVariant
  error?: boolean
  disabled?: boolean
  errorText?: string
  fullWidth?: boolean
}

export const Input = ({
  id,
  label,
  type,
  error,
  errorText,
  disabled = false,
  fullWidth = false,
  className,
  value,
  onChange,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const wrapperClassNames = clsx(s.wrapper, fullWidth && s.fullWidth)
  const containerClassNames = clsx(s.inputContainer, error && s.error, className)

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
    <div className={wrapperClassNames}>
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
          value={value}
          disabled={disabled}
          onChange={onChange}
          data-disabled={disabled}
          {...rest}
        />

        {isPassword && (
          <button
            type={'button'}
            className={s.iconButton}
            onClick={() => setShowPassword(!showPassword)}
            disabled={disabled}
            tabIndex={-1}
            aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
            data-disabled={disabled}
          >
            {showPassword ? <UniversalIcon name={'eye'} /> : <UniversalIcon name={'eye-off'} />}
          </button>
        )}
      </div>

      {error && errorText && <div className={s.errorText}>{errorText}</div>}
    </div>
  )
}
