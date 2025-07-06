import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, ForwardedRef } from 'react'

import clsx from 'clsx'
import { Select } from 'radix-ui'

import s from './selectbox.module.scss'

type SelectItemProps = {
  value: string
  children: React.ReactNode
} & ComponentPropsWithoutRef<typeof Select.Item>

export const SelectItem = React.forwardRef<ElementRef<typeof Select.Item>, SelectItemProps>(
  (
    { children, className, ...props }: SelectItemProps,
    forwardedRef: ForwardedRef<ElementRef<typeof Select.Item>>
  ): React.ReactElement => {
    return (
      <Select.Item className={clsx(s.Item, className)} {...props} ref={forwardedRef}>
        <Select.ItemText className={s.ItemContent}>{children}</Select.ItemText>
      </Select.Item>
    )
  }
)
