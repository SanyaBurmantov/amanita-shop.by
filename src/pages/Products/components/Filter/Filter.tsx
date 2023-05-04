import {FC, useState} from 'react';
import {products} from "../../../../data/Products";
import {FilterItem} from "./FilterItem";
import {FunctionUpdateFilter, IProduct, TypeSetState} from "../../../../types";
import './Filter.scss'

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
        <div className='filter'>
            <button className={active === 'Все' ? 'product-filter__item active' : 'product-filter__item'}
                    onClick={() => {
                        ArrFilter('all');
                        updateFilter(products);
                        setActive('Все')
                    }}>Все
            </button>
            <div className='product-filter__items'>
                {fill.map((item, index) => <FilterItem key={item.id} active={active} setActive={setActive} item={item}
                                                       ArrFilter={ArrFilter}/>)}
            </div>
        </div>
    );
};
