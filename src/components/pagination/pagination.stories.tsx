import type { Meta } from '@storybook/react'
import { Pagination } from './'

export default {
    component: Pagination,
    tags: ['autodocs'],
    title: 'Components/Pagination',
} as Meta<typeof Pagination>

export const Success = {
    args: {
        children: 'Your settins are saved',
        variant: 'success',
        fullWidth: false,
    },
}

