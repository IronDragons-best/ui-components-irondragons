import type {Meta, StoryObj} from '@storybook/react'

import { Header } from './Header'

const meta: Meta<typeof Header> = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0D0D0D' }],
    },
  },
  args: {},
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
}

export default meta
type Story = StoryObj<typeof meta>

/** Header component story for an **authorized user** without notifications */
export const HeaderAuthorizedUser: Story = {
  args: {
    isAuth: true,
    localization: 'eng',
  },
}
/** Header component story for an **authorized user** with a few notifications (less than 10) */
export const HeaderAuthorizedUserWithNotifications: Story = {
  args: {
    isAuth: true,
    localization: 'eng',
    notificationCount: 7,
  },
}
/** Header component story for an **authorized user** with many notifications (more than 9) */
export const HeaderAuthorizedUserWithMultipleNotifications: Story = {
  args: {
    isAuth: true,
    localization: 'eng',
    notificationCount: 15,
  },
}
/** Header component story for a **non-authorized user** */
export const HeaderNonAuthorizedUser: Story = {
  args: {
    isAuth: false,
    localization: 'eng',
  },
}
/** Header component story for a user who is not authorized
 * but is currently in the process of authorizing */
export const HeaderAuthorizingUser: Story = {
  args: {
    isAuth: false,
    localization: 'eng',
    isProcessingAuth: true,
  },
}