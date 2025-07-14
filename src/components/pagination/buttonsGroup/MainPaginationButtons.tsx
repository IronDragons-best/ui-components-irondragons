import {FC} from "react";
import {MainPaginationButtonsProps} from "@/components/pagination/paginationTypes";
import {PageButton} from "@/components/pagination/buttonsGroup/PageButton";
import {Dots} from "@/components/pagination/buttonsGroup/Dots";

export const MainPaginationButtons: FC<MainPaginationButtonsProps> = ({ currentPage, onClick, paginationRange }) => {
    return (
        <>
            {paginationRange.map((page: number | string, index) => {
                const isSelected = page === currentPage
                if (typeof page !== 'number') {
                    return <Dots key={index} />
                }

                return <PageButton key={index} onClick={onClick(page)} page={page} selected={isSelected} />
            })}
        </>
    )
}