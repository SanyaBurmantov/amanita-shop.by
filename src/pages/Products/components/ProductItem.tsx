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

    const addHandler = () => {
        dispatch(addToCart(product, count))
    }
    return (
        <div className="product">
            <div className="product__item" onClick={() => setIsShowProduct(!isShowProduct)}>
                < img className="product__item--pic" src={product.imagePath} alt={product.name}/>
                    <div className="">{product.name} </div>
                    <div className="">{product.price}</div>
                    <Quantity count={count} setCount={setCount}/>
                </div>
                <button onClick={addHandler}>В корзину</button>
                <div className={isShowProduct ? 'product__more active' : 'product__more'}>
                    <div className="">< img src={product.imagePath} alt={product.name}/></div>
                    <div className="">{product.name} </div>
                    <div className="">{product.title} </div>
                    <div className="">{product.count} </div>
                    <div className="">{product.price}</div>
                    <button onClick={addHandler}>В корзину</button>
                </div>
        </div>
    );
};

export default ProductItem

