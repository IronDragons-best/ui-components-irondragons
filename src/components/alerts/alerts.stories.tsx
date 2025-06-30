import type {Meta, Story} from '@storybook/react'
import { Alert } from './'
import {useState} from "react";

export default {
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#0D0D0D' },
            ],
        },
    },
    argTypes: {
        onClose: { action: 'closed' }
    },
    component: Alert,
    tags: ['autodocs'],
    title: 'Components/Alerts',
} as Meta<typeof Alert>

/** Example of a success Alert */
export const Success: Story = {
    render: (args) => {
        const [visible, setVisible] = useState(true);

        return (
            <>
                {visible && (
                    <Alert
                        {...args}
                        onClose={() => {
                            setVisible(false);
                            args.onClose?.(); // вызов экшена
                        }}
                    />
                )}
            </>
        );
    },
    args: {
        children: 'Your settings are saved',
        variant: 'success',
        fullWidth: false,
        closable: true,
    },
};

/** Example of the error Alert */
export const Error: Story = {
    render: (args) => {
        const [visible, setVisible] = useState(true);
        return (
            <>
                {visible && (
                    <Alert
                        {...args}
                        onClose={() => {
                            setVisible(false);
                            args.onClose?.(); // вызов экшена
                        }}
                    />
                )}
            </>
        );
    },
    args: {
        children: 'Server is not available',
        variant: 'error',
        fullWidth: false,
        closable: true,
    },
};