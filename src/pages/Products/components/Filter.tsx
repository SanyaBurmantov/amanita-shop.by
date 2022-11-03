import React, {FC, useState} from 'react';
import {products} from "../../../data/Products";
import {FunctionProdFilter} from "../../../types";

interface FilterProps {
    ProdFilter: FunctionProdFilter
}

export const Filter: FC<FilterProps> = ({ProdFilter}) => {

    const FillProd: { [Type: string]: number } = {};
    const fill = products.filter(({type}) => (!FillProd[type] && (FillProd[type] = 1)));



    return (
        <div className='section-products__filter'>{fill.map((FillProd) => <button
            className='section-products__filter--element'
            onClick={() => ProdFilter(FillProd.type)}>{FillProd.type}</button>)}</div>
    );
};
