import {FC} from 'react';
import {FunctionArrFilters, IProduct, TypeSetState} from "../../../../types";

interface FilterItem {
    item: IProduct;
    ArrFilter: FunctionArrFilters;
    setActive: TypeSetState<string>;
    active: string
}

export const FilterItem: FC<FilterItem> = ({item, ArrFilter, setActive, active}) => {


    return (
        <button
            className={active === item.type ? 'product-filter__item active' : 'product-filter__item'}
            key={item.id}
            onClick={() => {
                ArrFilter(item.type);
                setActive(item.type)
            }
            }>
            {item.type}
        </button>
    );
};
