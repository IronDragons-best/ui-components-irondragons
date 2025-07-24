type UsePaginationParamType = {
    count: number;
    onChange: (pageNumber: number) => void;
    page: number;
    siblings?: number;
};
type PaginationRange = ('...' | number)[];
export declare const usePagination: ({ count, onChange, page, siblings }: UsePaginationParamType) => {
    paginationRange: PaginationRange;
    handleMainPageClicked: (pageNumber: number) => () => void;
    handleNextPageClicked: () => void;
    handlePreviousPageClicked: () => void;
    isFirstPage: boolean;
    isLastPage: boolean;
};
export {};
