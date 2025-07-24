import { Tabs } from 'radix-ui'
import s from './tabs.module.scss'
import { clsx } from 'clsx'
import type { ReactNode } from 'react'

type Tab = {
  /** id current tab (for example: "tab1") */
  id: string
  /**  The content of the tab   */
  label: ReactNode
  /** Disabled Tab */
  disabled?: boolean
}

type Props = {
  tabs: Tab[]
  /** id current tab (for example: "tab1") */
  value: Tab['id']
  /** Change active tab */
  onValueChange: (val: Tab['id']) => void
  /** * If true, the tab stretches to the full width of its container.  */
  fullWidth?: boolean
  /** any children, for example <Tabs.Content /> */
  children?: ReactNode
}

export const TabsComponent = ({
  tabs,
  value,
  onValueChange,
  fullWidth = false,
  children,
}: Props) => {
  return (
    <Tabs.Root value={value} onValueChange={onValueChange} className={s.root}>
      <Tabs.List className={s.list}>
        {tabs.map(({ id, label, disabled }) => (
          <Tabs.Trigger
            key={id}
            value={id}
            disabled={disabled}
            className={clsx(s.trigger, fullWidth && s.fullWidth)}
          >
            {label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {children}
    </Tabs.Root>
  )
}
