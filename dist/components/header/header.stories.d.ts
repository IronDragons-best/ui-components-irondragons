import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
declare const meta: Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof meta>;
/** Header component story for an **authorized user** without notifications */
export declare const HeaderAuthorizedUser: Story;
/** Header component story for an **authorized user** with a few notifications (less than 10) */
export declare const HeaderAuthorizedUserWithNotifications: Story;
/** Header component story for an **authorized user** with many notifications (more than 9) */
export declare const HeaderAuthorizedUserWithMultipleNotifications: Story;
/** Header component story for a **non-authorized user** */
export declare const HeaderNonAuthorizedUser: Story;
/** Header component story for a user who is not authorized
 * but is currently in the process of authorizing */
export declare const HeaderAuthorizingUser: Story;
