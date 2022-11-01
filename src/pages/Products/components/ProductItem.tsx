import React, {FC, useState} from 'react';
import {IProduct} from "../../../types";
import Quantity from "./Quantity";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../store/cart/actions";

interface IProductItem{
    product: IProduct
}

const ProductItem:FC<IProductItem> = ({product}) => {

    const [isShowProduct, setIsShowProduct] = useState(false);

    const [count, setCount] = useState(0)

    const dispatch = useDispatch()

    const addHandler = () => { if(count>0){
        dispatch(addToCart(product, count))
        console.dir(dispatch)
    }
    }
    return (
        <div className="product">
            <div className="product__item" onClick={() => setIsShowProduct(!isShowProduct)}>
                <img className="product__item--pic" src={product.imagePath} alt={product.name}/>
                <div className="">{product.name} </div>
            </div>
            <div className="">{product.price}</div>
            <Quantity count={count} setCount={setCount}/>
            <button onClick={addHandler}>Купить</button>
            <button onClick={addHandler}>В корзину</button>
            <div className={isShowProduct ? 'product-info__more active' : 'product__more'} onClick={() => setIsShowProduct(false)}>
                <div className={isShowProduct ? 'product-info__more--item active' : 'product-info__more--item'}>

                    <div><img className="product-info__more--pic" src={product.imagePath} alt={product.name}/></div>
                    <div className="product-info__more--name">{product.name} </div>
                    <div className="product-info__more--title">{product.title} </div>
                    <div className="product-info__more--count">{product.count} </div>
                    <div className="product-info__more--price">{product.price}</div>
                    <button onClick={addHandler}>В корзину</button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem

