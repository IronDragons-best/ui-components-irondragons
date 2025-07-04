import { InputHTMLAttributes, useState } from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

import Eye from '../../assets/icons/components/Eye'
import EyeOff from '../../assets/icons/components/EyeOff'
import Search from '../../assets/icons/components/Search'

type InputVariant = 'search' | 'email' | 'password'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  type: InputVariant
  error?: boolean
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
  const [isFocused, setIsFocused] = useState(false)

  const isPassword = type === 'password'
  const isSearch = type === 'search'

  let inputType: string

  if (isPassword) {
    inputType = showPassword ? 'text' : 'password'
  } else {
    inputType = type
  }

  const containerClassNames = clsx(
    s.inputContainer,
    error && s.error,
    fullWidth && s.fullWidth,
    className
  )

  return (
    <div className={s.wrapper}>
      {label && (
        <label htmlFor={id} className={s.label}>
          {label}
        </label>
      )}

      <div className={containerClassNames}>
        {isSearch && (
          <span className={s.icon} data-atribute={11} aria-disabled={}>
            <Search />
          </span>
        )}

        <input
          id={id}
          type={inputType}
          className={s.input}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />

        {isPassword && (
          <button
            type={'button'}
            className={s.iconButton}
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
            aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>

      {error && errorText && <div className={s.errorText}>{errorText}</div>}
    </div>
  )
}
