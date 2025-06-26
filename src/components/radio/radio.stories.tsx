import type { Meta, StoryObj } from '@storybook/react'

import {Radio, RadioOptionsType} from './Radio'
const mock: RadioOptionsType[] = [
	{id: '1', radioName: 'Default'},
	{id: '2', radioName: 'Default1'},
	{id: '3', radioName: 'Default2'},
	{id: '4', radioName: 'Default3'},
	
]
const meta = {
	component: Radio,
	tags: ['autodocs'],
	title: 'Components/Radio',
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const RadioPrimary: Story = {
	args: {
		options: mock,
		disabled: false
	},
}
