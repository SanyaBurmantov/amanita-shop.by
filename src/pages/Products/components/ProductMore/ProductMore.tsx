import {FC} from 'react';
import {IProduct} from "../../../../types";
import './ProductMore.scss'
import {MoreItem} from "./MoreItem";
import {MoreImages} from "../MoreImages/MoreImages";



interface ProductMore {
    product: IProduct
}

export const ProductMore: FC<ProductMore> = ({product}) => {

    return (
        <div className='more'>
            <div className='more__top_content'>
                    <h3 className='more__top_content-name'>{product.moreName}</h3>
                    <p className='more__top_content-text'>{product.text}</p>
            </div>
            <div className='more__center_images'>
                <div className='more__center_images-items'>
                    {product.slider.map((attr ,index)=>
                        <MoreImages key={attr.id} item={attr} />
                    )}
                </div>
            </div>
            <div className='more-bottom'>
                <h3>Полезная информация</h3>
                <hr/>
                {product.more.map((attr, index) =>
                    <MoreItem key={attr.id} item={attr} />
                )}
            </div>
        </div>
    );
};
