import {FC} from "react";
import {classNames, PerPageSelectProps} from "@/components/pagination/paginationTypes";
import {Selectbox} from "@/components";

export const PerPageSelect: FC<PerPageSelectProps> = ({onPerPageChange, perPage, perPageOptions}) => {
    const selectOptions = perPageOptions.map(value => ({
        label: value.toString(),
        value,
    }))

    return (
        <div className={classNames.selectBox}>
            Show
            <Selectbox
                variant={'pagination'}
                className={classNames.selectBox}
                onValueChange={(val) => onPerPageChange(Number(val))}
                options={selectOptions}
                value={perPage}
            />
            on page
        </div>
    )
}

