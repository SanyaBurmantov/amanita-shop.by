import React, {FC, useState} from 'react';
import {IProduct} from "../../../types";
import Quantity from "./Quantity";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../store/cart/actions";
import {products} from "../../../data/Products";
import {Form} from "react-router-dom";


interface IProductItem{
    product: IProduct
}


const ProductItem:FC<IProductItem> = ({product}) => {

    const [isShowProduct, setIsShowProduct] = useState(false);

    const [daun, setDaun] = useState(0)

     const [count, setCount] = useState(1)

    const dispatch = useDispatch()

    const addHandler = () => { if(count>0 && daun > 0){
        dispatch(addToCart(product, items))
        console.dir(dispatch)
    };
    }

    let countSelectorBase = [product.count, product.count*2, product.count*3,];


    let selectorCount = countSelectorBase.map((count) =>

            <div className="product__radio">
                <input onClick={() => setCount(count)} id={product.name + product.count.toString()} type="radio" name="count" value={count}/>
                <label className="product__radio--label" htmlFor={count.toString()}>{count}</label>
            </div>

    )


    let capacity = product.capacity;

    let selectorValue = capacity.map((size) =>

        <div className="">
            <input onClick={()=> setDaun(size)} type="radio" name="capacity" value={size} />
            <label htmlFor={size.toString()}>{size}</label>

        </div>
    )

    let finalPrice = Math.ceil(daun * product.price * count)

    let items = daun * count;

    return (
        <div className="product">

            {/*лево*/}

            <div className="product__left">
                <div className="product__text">
                    <div className="product__text--title">{product.name} </div>
                    <div className="product__text--subtitle">{product.title} </div>
                </div>


                <form onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {};
                }}
                >
                    <>Колличество {(product.form == 1) ? "пилюль" : (product.form == 2) ? "грамм порошка" : "грамм шляпками"} ?</>
                    <div className="product__checkbox">
                    {selectorCount}
                    </div>
                    <b>Колличество {(product.form == 1) ? "грам в пилюле" : (product.form == 2) ? "грамм в очке" : "грамм нахуй"} ?</b>
                    <div>  {selectorValue} </div>
                </form>
            </div>
            {/*право*/}
            <div className="product__right">
                <div className="product__right--picture">
                    <img className="" src={product.imagePath} alt={product.name}/>
                </div>
            </div>
            {/*/НИЗ?///*/}
            <div className="product__bottom">

                    <div className="product__bottom--price">  {daun ? "Итого: " + finalPrice : 'Не выбрано'}</div>
                <div className="product__bottom--btn">
                    <div className="product__bottom--buttons"><button className="btn " onClick={addHandler}>Купить</button></div>
                    <div className=""><button className="btn btn-second" onClick={() => setIsShowProduct(!isShowProduct)}>Подробнее
                    </button></div>
                </div>

            </div>
  {/*///////////////////////////////////////////////////////              */}

                <div className={isShowProduct ? 'product-info__more active' : 'product__more'}
                     onClick={() => setIsShowProduct(false)}>
                </div>
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

    );
};

export default ProductItem

