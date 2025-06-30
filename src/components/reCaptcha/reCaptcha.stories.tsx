import type {Meta, StoryObj} from '@storybook/react'
import {ReCaptcha} from './ReCaptcha'

const meta = {
	args: {
		isCaptchaPassed: true,
		setCaptchaToken: () => {}
	},
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{ name: 'dark', value: '#0D0D0D' },
			],
		},
	},
	component: ReCaptcha,
	tags: ['autodocs'],
	title: 'Components/ReCaptcha',
} satisfies Meta<typeof ReCaptcha>

export default meta
type Story = StoryObj<typeof meta>

/** Example of a standard google ReCaptcha */
export const GoogleReCaptcha: Story = {
	args: {
		isCaptchaPassed: true,
		setCaptchaToken: () => {}
	}
}
