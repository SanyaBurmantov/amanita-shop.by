import React, {FC} from 'react';
import {IProduct} from "../../../../types";
import './ProductMore.scss'
import {MoreItem} from "./MoreItem";


interface ProductMore {
    product: IProduct
}

export const ProductMore: FC<ProductMore> = ({product}) => {

    return (
        <></>
        // <div className='more'>
        //     <div className='more__top'>
        //         <div className='more__top-content'>
        //             <h3 className='more__top-content-title'>{product.name}</h3>
        //             {product.more.map((item) =>
        //                 <p>{item.text}</p>)}
        //         </div>
        //         <div className='more__top-slider'>
        //             <img src={product.imagePath}/>
        //         </div>
        //     </div>
        //     <div>ddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
        //     <div>ddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
        //     <div>ddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
        //     <div>ddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
        //     <div>ddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
        //     <div>ddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
        //     <div>ddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
        //     <div>ddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
        //     <div>ddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
        //     <div>ddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
        //     <div>ddddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
        //
        //
        //     <div className='more__bottom'>
        //         <hr/>
        //         {product.more.map((item) =>
        //             item.description.map((attr) =>
        //                 <MoreItem attr={attr}/>
        //             ))}
        //     </div>
        // </div>
    );
};
