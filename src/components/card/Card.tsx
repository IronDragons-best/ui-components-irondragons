import styles from './Card.module.scss';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

type Props = {
  children?: ReactNode;
  fullWidth?: boolean;
};
export const Card = ({ children, fullWidth }: Props) => {
  const classNames = clsx(styles.cardBody, fullWidth && styles.fullWidth);
  return <div className={classNames}>{children}</div>;
};
