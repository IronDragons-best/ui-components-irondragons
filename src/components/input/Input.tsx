import { InputHTMLAttributes, useState } from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

import { UniversalIcon } from '@/components'

type InputVariant = 'search' | 'email' | 'password' | 'text'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  /** Defines the visual style of the input (e.g., "search", "password", "text"). */
  inputType: InputVariant
  /**  Optional label text displayed above the input field. */
  label?: string
  /** Error message displayed below the input when error is true. */
  errorText?: string
  /** 	If true, the input spans 100% of its container width. */
  fullWidth?: boolean
}

export const Input = ({
  id,
  label,
  inputType,
  errorText,
  disabled = false,
  fullWidth = false,
  required,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const containerClassNames = clsx(s.inputContainer, errorText && s.error, fullWidth && s.fullWidth)

  const isPassword = inputType === 'password'
  const isSearch = inputType === 'search'

  const currentInputType = (variants: InputVariant) => {
    if (isPassword) {
      return showPassword ? 'text' : 'password'
    } else {
      return variants
    }
  }

  return (
    <div className={s.wrapper}>
      {label && (
        <label
          data-requiredfield={required}
          htmlFor={id}
          className={s.label}
          data-disabled={disabled}
        >
          {label}
        </label>
      )}
      <div className={containerClassNames} data-disabled={disabled}>
        {isSearch && (
          <button type={'submit'} className={s.iconButton} data-disabled={disabled}>
            <UniversalIcon name={'search'} />
          </button>
        )}
        <input
          id={id}
          type={currentInputType(inputType)}
          required={required}
          className={s.input}
          autoComplete={'off'}
          {...rest}
        />

        {isPassword && (
          <button
            type={'button'}
            className={s.iconButton}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <UniversalIcon name={'eye-outline'} />
            ) : (
              <UniversalIcon name={'eye-off-outline'} />
            )}
          </button>
        )}
      </div>

      {errorText && <div className={s.errorText}>{errorText}</div>}
    </div>
  )
}
