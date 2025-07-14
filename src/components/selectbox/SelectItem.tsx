import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, ForwardedRef } from 'react'

import clsx from 'clsx'
import { Select } from 'radix-ui'

import s from './selectbox.module.scss'

type SelectItemProps = {
  value: string
  variant?: 'default' | 'pagination'
  children: React.ReactNode
} & ComponentPropsWithoutRef<typeof Select.Item>

export const SelectItem = React.forwardRef<ElementRef<typeof Select.Item>, SelectItemProps>(
  (
    { children, variant, className, ...props }: SelectItemProps,
    forwardedRef: ForwardedRef<ElementRef<typeof Select.Item>>
  ): React.ReactElement => {
    return (
      <Select.Item className={clsx(s[`${variant}`], s.Item, className)} {...props} ref={forwardedRef}>
        <Select.ItemText className={s.ItemContent}>{children}</Select.ItemText>
      </Select.Item>
    )
  }
)
