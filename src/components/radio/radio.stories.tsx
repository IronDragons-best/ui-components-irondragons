import type {Meta, StoryObj} from '@storybook/react'

import {Radio} from './Radio'

const meta = {
	component: Radio,
	tags: ['autodocs'],
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{ name: 'dark', value: '#0D0D0D' },
			],
		},
	},
	argTypes: {
		asChild: {
			table: {
				disable: true,
			},
		},
		disabled: {
			table: {
				disable: true,
			},
		},
	},
	title: 'Components/Radio',
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

/**
 * ## Basic Usage
 * Shows default radio group with two options.
 */
export const RadioActive: Story = {
	args: {
		options: [
			{ id: 'opt1', radioName: 'Option 1' },
			{ id: 'opt2', radioName: 'Option 2' },
		],
		disabled: false
	},
}

/**
 * ## Disabled State
 * Shows radio group in disabled state.
 */
export const RadioDisabled: Story = {
	args: {
		options: [
			{ id: 'opt3', radioName: 'Option 3' },
			{ id: 'opt4', radioName: 'Option 4' },
		],
		disabled: true
	},
}
