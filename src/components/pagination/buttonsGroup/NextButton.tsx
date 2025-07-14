import {FC} from "react";
import {UniversalIcon} from "@/components";
import {classNames, NavigationButtonProps} from "@/components/pagination/paginationTypes";

export const NextButton:FC<NavigationButtonProps>= ({disabled, onClick, size}) => {
    return (
        <button className={classNames.item} disabled={disabled} onClick={onClick}>
            <UniversalIcon className={classNames.icon} name={"arrow-ios-forward"} size={size}/>
        </button>
    )
}