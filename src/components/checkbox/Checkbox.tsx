import { ComponentPropsWithoutRef } from 'react'

import { CheckIcon } from '@radix-ui/react-icons'
import { Checkbox as RadixCheckbox } from 'radix-ui'

import s from './checkbox.module.scss'

type CheckboxProps = {
  /** **Required**: Unique identifier for the checkbox */
  idProp: string
  /** Label displayed next to the checkbox */
  label?: string
  /** Additional class name for styling */
  className?: string
  /** Disables the checkbox */
  disabled?: boolean
  /** Controls the checked state (if controlled externally) */
  checked?: boolean
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

export const Checkbox = ({ label, idProp, className, disabled, ...props }: CheckboxProps) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <RadixCheckbox.Root
      className={s.Root}
      defaultChecked
      id={idProp}
      aria-disabled={disabled}
      {...props}
    >
      <RadixCheckbox.Indicator className={s.Indicator} aria-disabled={disabled}>
        <CheckIcon />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
    <label className={s.Label} htmlFor={idProp} aria-disabled={disabled}>
      {label}
    </label>
  </div>
)
