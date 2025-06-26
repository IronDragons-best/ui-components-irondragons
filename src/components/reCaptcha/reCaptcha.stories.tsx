import type {Meta, StoryObj} from '@storybook/react'

import {ReCaptcha} from './ReCaptcha'

const meta = {
	component: ReCaptcha,
	tags: ['autodocs'],
	title: 'Components/ReCaptcha',
} satisfies Meta<typeof ReCaptcha>

export default meta
type Story = StoryObj<typeof meta>

export const GoogleReCaptcha: Story = {
	args: {
		isCaptchaPassed: true
	}
}
