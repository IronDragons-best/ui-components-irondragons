import {clsx} from "clsx";
import s from './pagination.module.scss'

type PaginationConditionals =
    | {
    onPerPageChange: (itemPerPage: number) => void
    perPage: number
    perPageOptions: number[]
}
    | {
    onPerPageChange?: never
    perPage?: null
    perPageOptions?: never
}

export type PaginationProps = {
    count: number
    onChange: (page: number) => void
    onPerPageChange?: (itemPerPage: number) => void
    page: number
    perPage?: number
    perPageOptions?: number[]
    siblings?: number
} & PaginationConditionals

export const classNames = {
    container: s.container,
    dots: s.dots,
    icon: s.icon,
    item: s.item,
    pageButton(selected?: boolean) {
        return clsx(this.item, selected && s.selected)
    },
    root: s.root,
    select: s.select,
    selectBox: s.selectBox,
}

export type MainPaginationButtonsProps = {
    currentPage: number
    onClick: (pageNumber: number) => () => void
    paginationRange: (number | string)[]
}

export type NavigationButtonProps = {
    disabled?: boolean
    onClick: () => void
    size?: number
}

export type PageButtonProps = NavigationButtonProps & {
    page: number
    selected: boolean
}

export type PerPageSelectProps = {
    onPerPageChange: (itemPerPage: number) => void
    perPage: number
    perPageOptions: number[]
}