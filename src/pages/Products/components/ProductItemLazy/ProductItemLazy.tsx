import {FC} from 'react';
import Preloader from "../../../../shared/UI/Preloader/Preloader";

interface ProductItemLazy{

}

const ProductItemLazy: FC<ProductItemLazy> = () => {
    return (
        <div className='product'>
            <div className='product-wrapper'>
                <div className='product-body'>
                    <Preloader/>
                </div>
            </div>
        </div>
    );
};

export default ProductItemLazy;