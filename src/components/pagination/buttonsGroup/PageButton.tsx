import {FC} from "react";
import {classNames, PageButtonProps} from "@/components/pagination/paginationTypes";

export const PageButton: FC<PageButtonProps> = ({disabled, onClick, page, selected}) => {
    return (
        <button className={
                classNames.pageButton(selected)}
                disabled={selected || disabled}
                onClick={onClick}
                type={"button"}
        >
            {page}
        </button>
    )
};