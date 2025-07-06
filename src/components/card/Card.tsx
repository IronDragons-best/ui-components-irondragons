import { ReactNode } from 'react';

import { clsx } from 'clsx';

import styles from './Card.module.scss';

type cardSize = 'sm' | 'md' | 'lg';

type Props = {
  /**
   * Controls the card's padding and font scaling.
   * @default 'md'
   */
  size?: cardSize;
  /**
   * Content to render inside the card.
   * Accepts strings, JSX, arrays, etc.
   */
  children?: ReactNode;
  /**
   * When `true`, forces the card to occupy 100% of its parent's width.
   * @default false
   */
  fullWidth?: boolean;
};

export const Card = ({ children, fullWidth, size = 'md' }: Props) => {
  const classNames = clsx(styles.cardBody, fullWidth && styles.fullWidth);

  return (
    <div className={classNames} data-cardSize={size}>
      {children}
    </div>
  );
};
