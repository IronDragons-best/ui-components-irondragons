import { ComponentPropsWithoutRef, FC } from 'react'

import { ChevronDownIcon } from '@radix-ui/react-icons'
import { Select } from 'radix-ui'

import '../../styles/index.scss'

import s from './selectbox.module.scss'

import { SelectItem } from './SelectItem'
import { UniversalIcon } from '../common/unversalIcon/UniversalIcon'
import { clsx } from 'clsx'

type LanguageType = 'rus' | 'eng'

type OptionType = {
  value: LanguageType | string | number
  label: string
  icon?: string
}

type SelectboxProps = {
  /** **Required**: Unique ID for the Select. Trigger and associated label */
  idProp?: string
  /** **Required**: Name attribute for the form (useful when submitting forms) */
  name?: string
  /** **Required**: Array of options to choose from, each with a label (display text) and value */
  options: OptionType[]
  /** Placeholder text shown when no option is selected */
  placeholder?: string
  /** Initial value */
  value?: string | number
  variant?: 'default' | 'pagination'
  /** Label displayed above the select input */
  label?: string
  /** Disables the select input */
  disabled?: boolean
  /** Additional CSS class names for the root element */
  className?: string
  /** If true, the select input stretches to the full width of its container */
  fullWidth?: boolean
  /** Callback fired when the selected value changes */
  onValueChange?: (value: string) => void
  /** Callback fired when the dropdown opens or closes */
  onOpenChange?: (open: boolean) => void
} & Omit<ComponentPropsWithoutRef<typeof Select.Root>, 'value' | 'onValueChange' | 'children'>

export const Selectbox: FC<SelectboxProps> = ({
  idProp,
  name,
  label = '',
  placeholder = 'Select...',
  disabled = false,
  className,
  value,
  fullWidth,
  onValueChange,
  onOpenChange,
  options,
  variant = 'default',
  ...rest
}: SelectboxProps) => {
  const selectedOption: OptionType | undefined = options.find(opt => opt.value === value)

  return (
    <Select.Root onValueChange={onValueChange} onOpenChange={onOpenChange} {...rest}>
      {label && (
        <label htmlFor={idProp} className={s.Label}>
          {label}
        </label>
      )}
      <Select.Trigger
        id={idProp}
        className={clsx(s[`${variant}`], s.Trigger, fullWidth && s.fullWidth)}
        disabled={disabled}
        aria-label={label}
        data-label={label ? 'true' : 'false'}
        name={name}
      >
        {selectedOption ? (
          <div className={s.Selected}>
            {selectedOption.icon && (
              <span className={s.IconWrapper}>
                <UniversalIcon name={selectedOption.icon} />
              </span>
            )}
            {selectedOption.label}
          </div>
        ) : (
          <Select.Value placeholder={placeholder} />
        )}
        <Select.Icon className={s.Icon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className={clsx(s[`${variant}`], s.Content)}
          side={'bottom'}
          position={'popper'}
        >
          <Select.Viewport className={s.Viewport}>
            <Select.Group>
              {options.map(option => (
                <SelectItem
                  className={s.Selected}
                  key={option.value}
                  variant={variant}
                  value={option.value.toString()}
                >
                  {option.icon && (
                    <span>
                      <UniversalIcon name={option.icon} />
                    </span>
                  )}
                  {option.label}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
