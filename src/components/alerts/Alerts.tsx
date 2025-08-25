import { ComponentProps, FC, ReactNode, useEffect } from 'react'

import { clsx } from 'clsx'

import s from './alerts.module.scss'

import { UniversalIcon } from '@/components'

export type AlertProps = {
  /**
   * **Required**: The content of the alert (usually text or elements).
   */
  children: ReactNode
  /**
   * Visual variant of the alert. Can be 'success' (green) or 'error' (red).
   * Defaults to no variant styling.
   */
  variant?: 'success' | 'error'
  /**
   * Callback fired when the close button is clicked.
   */
  onClose: () => void
  /**
   * **Required**: If true, the alert can be closed via a close button.
   */
  withCloseIcon?: boolean
  /**
   * If true, the alert stretches to the full width of its container.
   */
  fullWidth?: boolean
  isOpen: boolean
} & ComponentProps<'div'>

export const Alert: FC<AlertProps> = ({
  children,
  variant = 'success',
  onClose,
  withCloseIcon = true,
  fullWidth = false,
  isOpen = false,
  ...rest
}) => {
  const classNames = {
    box: clsx(s.box, variant === 'success' ? s.success : s.error, fullWidth && s.fullWidth),
    content: s.content,
    icon: clsx(s.icon),
  }
  useEffect(() => {
    let timerId: any
    if (isOpen) {
      timerId = setTimeout(onClose, 5000)
    }

    return () => clearTimeout(timerId)
  }, [isOpen])

  return (
    <div className={classNames.box} {...rest} data-isopen={isOpen}>
      <div className={classNames.content}>
        {variant === 'error' ? (
          <div>
            <strong>Error!</strong> {children}
          </div>
        ) : (
          <>{children}</>
        )}
        {withCloseIcon && (
          <span className={classNames.icon} onClick={onClose}>
            <UniversalIcon name={'close'} />
          </span>
        )}
      </div>
    </div>
  )
}
