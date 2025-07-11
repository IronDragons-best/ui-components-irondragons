import { DatePicker } from './DatePicker'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0D0D0D' }],
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the DatePicker.'
    },
    hasError: {
      control: 'boolean',
      description: 'Turns on error state and shows errorText if provided'
    },
    errorText: {
      control: 'text',
      description: 'Text shown under component when error is active.'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction with trigger and calendar.'
    },
  }
}
export default meta

type Story = StoryObj<typeof DatePicker>

/** Example of a default DatePicker */
export const Default: Story = {
  args: {
    label: 'Date',
    hasError: false,
    errorText: '',
    disabled: false
  },
  render: (args) => {
    const [range, setRange] = useState<DateRange | undefined>({ from: new Date() })

    return <DatePicker {...args} value={range} onChange={setRange}/>
  }
}

/** Example of a DatePicker with error */
export const WithError: Story = {
  args: {
    label: 'Date',
    hasError: true,
    errorText: 'Error!',
    disabled: false
  },
  render: (args) => {
    const [range, setRange] = useState<DateRange | undefined>(undefined)

    return <DatePicker {...args} value={range} onChange={setRange}/>
  }
}

/** Example of a disabled DatePicker */
export const Disabled: Story = {
  args: {
    label: 'Date',
    hasError: false,
    errorText: '',
    disabled: true
  },
  render: (args) => {
    const [range, _] = useState<DateRange | undefined>(undefined)

    return <DatePicker {...args} value={range}/>
  }
}