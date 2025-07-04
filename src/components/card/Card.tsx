import { ReactNode } from 'react'

import { clsx } from 'clsx'

import styles from './card.module.scss'

type Props = {
  children?: ReactNode
  fullWidth?: boolean
}
export const Card = ({ children, fullWidth }: Props) => {
  const classNames = clsx(styles.cardBody, fullWidth && styles.fullWidth)

  return <div className={classNames}>{children}</div>
}
