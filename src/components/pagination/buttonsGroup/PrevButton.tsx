import {FC} from "react";
import {UniversalIcon} from "@/components";
import {classNames, NavigationButtonProps} from "@/components/pagination/paginationTypes";

export const  PrevButton: FC<NavigationButtonProps> = ({disabled, onClick, size}) => {
    return(
        <button className={classNames.item} disabled={disabled} onClick={onClick}>
            <UniversalIcon className={classNames.icon} name={'arrow-ios-back'} size={size}/>
        </button>
    )
}