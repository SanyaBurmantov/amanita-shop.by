import React, {FC} from 'react';
import {IProduct} from "../../../../types";
import './ProductMore.scss'
import {MoreItem} from "./MoreItem";


interface ProductMore {
    product: IProduct
}

export const ProductMore: FC<ProductMore> = ({product}) => {

    return (
        <div className='more'>
            <div className='more-top'>
                <div className='more-top-content'>
                    <div className='more-top-content-name'>{product.name}</div>
                    <div className='more-top-content-text'>{product.text}</div>
                </div>
                <div className='more-top-image'><img src={product.moreImage}/></div>
            </div>
            <div className='more-bottom'>
                <hr/>
                {product.more.map((attr, index)=>
                <MoreItem item={attr}/>
                )}
            </div>
        </div>
    );
};
