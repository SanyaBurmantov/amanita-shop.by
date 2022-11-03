import React, {FC, useState} from 'react';
import {IProduct} from "../../../types";
import Quantity from "./Quantity";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../store/cart/actions";
import {products} from "../../../data/Products";


interface IProductItem{
    product: IProduct
}


const ProductItem:FC<IProductItem> = ({product}) => {

    const [isShowProduct, setIsShowProduct] = useState(false);

    const [daun, setDaun] = useState(0)

    const [count, setCount] = useState(1)

    const dispatch = useDispatch()

    const addHandler = () => { if(count>0){
        dispatch(addToCart(product, count))
        console.dir(dispatch)
    };
    }

    let capacity = product.capacity;

    let selectorValue = capacity.map((size) =>

        <>
            <input onClick={() => setDaun(size) } type="radio" name="capacity"  value={size} />
            <label htmlFor={size.toString()}>{size}</label>
        </>
    )

    let finalPrice = (daun * product.price * count)



    return (
        <div className="product">
            <div className="product__item" onClick={() => setIsShowProduct(!isShowProduct)}>
                <img className="product__item--pic" src={product.imagePath} alt={product.name}/>
                <div className="product__info">
                    <div className="">{product.name} </div>
                    <div className="">{product.title} </div>
                </div>
            </div>
            <div className="">{product.price}</div>
            <form onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {
                    };}}
            >
                <b>Колличество?</b>

             <div>  {selectorValue} </div>
                <div> {finalPrice}</div>

            </form>
            <Quantity count={count} setCount={setCount}/>
            <button className="btn" onClick={addHandler}>Купить</button>
            <button className="btn btn-second" onClick={addHandler}>В корзину</button>
            <div className={isShowProduct ? 'product-info__more active' : 'product__more'} onClick={() => setIsShowProduct(false)}>
                <div className={isShowProduct ? 'product-info__more--item active' : 'product-info__more--item'}>


                    <div><img className="product-info__more--pic" src={product.imagePath} alt={product.name}/></div>
                    <div className="product-info__more--name">{product.name} </div>
                    <div className="product-info__more--text">{product.text} </div>
                    <div className="product-info__more--count">{product.count} </div>
                    <div className="product-info__more--price">{product.price}</div>
                    <div className="product-info__more--type">{product.type}</div>
                    <button onClick={addHandler}>В корзину</button>


                </div>
            </div>
        </div>
    );
};

export default ProductItem

