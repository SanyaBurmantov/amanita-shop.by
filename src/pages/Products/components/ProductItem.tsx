import React, {FC, useEffect, useState} from 'react';
import {IProduct} from "../../../types";
import CashImage from '../../../assets/icons/money.svg'
import {ProductForm} from "./ProductForm";


interface IProductItem{
    product: IProduct
}


const ProductItem:FC<IProductItem> = ({product}) => {

    const [isShowProduct, setIsShowProduct] = useState(false);
    const [count, setCount] = useState(1)
    const [daun, setDaun] = useState('')


    let finalPrice = Math.ceil(count*Number(daun))


    return (
        <div className='product'>
            <div className='product-container'>
                <div className='product-column'>
                    <div className='product-top'>
                        <div className='product-top-content'>
                            <div className='product-top-content-title'>{product.name}</div>
                            <div className='product-top-content-type'>{product.type}</div>
                            <div className='product-top-content-subtitle'>{product.title}</div>
                            <ProductForm count={count} setCount={setCount} product={product}
                                         daun={daun} setDaun={setDaun} />
                        </div>
                        <div className='product-top-image'><img src={product.imagePath}/></div>
                    </div>
                    <div className='product-bottom'>
                        <div className='product-bottom-cash'>
                            <div className='product-bottom-cash-image'><img src={CashImage}/></div>
                            <div className='product-bottom-cash-number'>
                                <span></span> {"Итого: " + finalPrice}</div>
                        </div>
                        <div className='product-bottom-buttons'>
                            <div className='product-bottom-buttons-pay'>
                                <button className="product-bottom-buttons-pay-btn">Купить</button>
                            </div>
                            <div className='product-bottom-buttons-more'>
                                <button className="product-bottom-buttons-more-btn"
                                        onClick={() => setIsShowProduct(!isShowProduct)}>Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;



