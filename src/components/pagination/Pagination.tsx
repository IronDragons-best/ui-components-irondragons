import {FC} from "react";
import {PrevButton} from "@/components/pagination/buttonsGroup/PrevButton";
import {NextButton} from "@/components/pagination/buttonsGroup/NextButton";
import {classNames, PaginationProps} from "@/components/pagination/paginationTypes";
import {MainPaginationButtons} from "@/components/pagination/buttonsGroup/MainPaginationButtons";
import {usePagination} from "@/components/pagination/usePagination";
import {PerPageSelect} from "@/components/pagination/PerPageSelect";

export const Pagination: FC<PaginationProps> = ({
                                                    count,
                                                    onChange,
                                                    onPerPageChange,
                                                    page,
                                                    perPage = null,
                                                    perPageOptions,
                                                    siblings,
                                                }) => {
    const {
        handleMainPageClicked,
        handleNextPageClicked,
        handlePreviousPageClicked,
        isFirstPage,
        isLastPage,
        paginationRange,
    } = usePagination({
        count,
        onChange,
        page,
        siblings,
    })

    const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

    return (
        <div className={classNames.root}>
            <div className={classNames.container}>
                <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} size={16}/>
                <MainPaginationButtons
                    currentPage={page}
                    onClick={handleMainPageClicked}
                    paginationRange={paginationRange}
                />
                <NextButton disabled={isLastPage} onClick={handleNextPageClicked} size={16}/>
            </div>

            {showPerPageSelect && (
                <PerPageSelect
                    {...{
                        onPerPageChange,
                        perPage,
                        perPageOptions,
                    }}
                />
            )}
        </div>
    )
}

