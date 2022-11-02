import React, {FC} from 'react';
import {products} from "../../../data/Products";
import {FunctionProdFilter} from "../../../types";

interface FilterProps {
    ProdFilter: FunctionProdFilter
}

export const Filter: FC<FilterProps> = ({ProdFilter}) => {

    const FillProd: { [Type: string]: number } = {};
    const fill = products.filter(({type}) => (!FillProd[type] && (FillProd[type] = 1)));


    return (
        <div className='blog__panel-buttons-button'>{fill.map((FillProd) => <button
            onClick={() => ProdFilter(FillProd.type)}>{FillProd.type}</button>)}</div>
    );
};
