import {FC, useState} from 'react';
import {products} from "../../../../data/Products";
import {FilterItem} from "./FilterItem";
import {FunctionUpdateFilter, IProduct, TypeSetState} from "../../../../types";

interface Filter {
    updateFilter: FunctionUpdateFilter;
    setFilter: TypeSetState<IProduct[]>;
}

export const Filter: FC<Filter> = ({updateFilter, setFilter}) => {

    const [active, setActive] = useState('Все')

    function ArrFilter(type: string) {
        if (type === 'all') {
            setFilter(products)
        } else {
            let newArr = [...products].filter(products => products.type === type)
            setFilter(newArr)
        }
    }


    const FillProd: { [Type: string]: number } = {};
    const fill = products.filter(({type}) => (!FillProd[type] && (FillProd[type] = 1)));


    return (
        <>
            <button
                className={active === 'Все' ? 'section-products__filter--element active' : 'section-products__filter--element'}
                onClick={() => {
                    ArrFilter('all');
                    updateFilter(products);
                    setActive('Все')
                }}>Все
            </button>
            <div className='section-products__filter'>
                {fill.map((item, index) => <FilterItem active={active} setActive={setActive} item={item}
                                                       ArrFilter={ArrFilter}/>)}
            </div>
        </>
    );
};
