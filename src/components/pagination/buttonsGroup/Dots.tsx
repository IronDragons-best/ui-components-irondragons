import {FC} from "react";
import {classNames} from "@/components/pagination/paginationTypes";

export const Dots: FC = () => {
    return (
        <span className={classNames.dots}>&#8230;</span>
    )
}