type PaginationConditionals = {
    onPerPageChange: (itemPerPage: number) => void;
    perPage: number;
    perPageOptions: number[];
} | {
    onPerPageChange?: never;
    perPage?: null;
    perPageOptions?: never;
};
export type PaginationProps = {
    count: number;
    onChange: (page: number) => void;
    onPerPageChange?: (itemPerPage: number) => void;
    page: number;
    perPage?: number;
    perPageOptions?: number[];
    siblings?: number;
} & PaginationConditionals;
export declare const classNames: {
    container: string;
    dots: string;
    icon: string;
    item: string;
    pageButton(selected?: boolean): string;
    root: string;
    select: string;
    selectBox: string;
};
export type MainPaginationButtonsProps = {
    currentPage: number;
    onClick: (pageNumber: number) => () => void;
    paginationRange: (number | string)[];
};
export type NavigationButtonProps = {
    disabled?: boolean;
    onClick: () => void;
    size?: number;
};
export type PageButtonProps = NavigationButtonProps & {
    page: number;
    selected: boolean;
};
export type PerPageSelectProps = {
    onPerPageChange: (itemPerPage: number) => void;
    perPage: number;
    perPageOptions: number[];
};
export {};
