import { useState } from 'react'

import {Meta} from '@storybook/react'

import {Pagination} from "@/components/pagination/Pagination";

const meta = {
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [{ name: 'dark', value: '#0D0D0D' }],
        },
    },
    tags: ['autodocs'],
    title: 'Components/Pagination',
    component: Pagination,
}satisfies Meta<typeof Pagination>;

export default meta;

/** Example of the default pagination */
export const Default = () => {
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(8)
    const TOTAL_PAGES_COUNT = 10

    return (
        <div>
            <Pagination
                onChange={setPage}
                count={TOTAL_PAGES_COUNT}
                page={page}
                perPage={perPage}
                perPageOptions={[5, 8, 12, 100]}
                onPerPageChange={setPerPage}
            />
        </div>
    )
}

/** Example of the default pagination with two pages */
export const DefaultWithTwoPages = () => {
    const [page, setPage] = useState(1)
    const TOTAL_PAGE_COUNT = 2

    return (
        <div>
            <Pagination onChange={setPage} count={TOTAL_PAGE_COUNT} page={page} />
        </div>
    )
}

/** Example of the default pagination with one pages */
export const DefaultWithOnePages = () => {
    const [page, setPage] = useState(1)
    const TOTAL_PAGE_COUNT = 1

    return (
        <div>
            <Pagination onChange={setPage} count={TOTAL_PAGE_COUNT} page={page} />
        </div>
    )
}