import React, {FC, useState} from 'react';
import {IProduct} from "../../../types";
import Quantity from "./Quantity";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../store/cart/actions";
import {products} from "../../../data/Products";
import {Form} from "react-router-dom";
import money from "../../../assets/icons/money.svg"

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




    function click(props: number,jops: number){
        return setCount(props),
                setDaun(jops)
    }

    let countSelectorBase = [product.count, product.count*2, product.count*3,product.count*4, product.count*5, product.count*6];


    let selectorCount = countSelectorBase.map((count) =>

            <div className="product__checkbox--radio">
               <span> <input onClick={ () => (daun===0!) ? ((needSelectorValue!) ? click(count, 0) : click(count, 1)) : click(count, daun)  } id={product._id+count} type="radio" name="count" value={count}/>
                <label htmlFor={product._id+count}>{count}</label></span>
            </div>

    )

    let capacity = product.capacity;
    let needSelectorValue = product.form===1;

    let selectorValue = (needSelectorValue!) ? capacity.map((size) =>

        <div className="product__capacity">
            <input onClick={()=> setDaun(size)} id={product._id+size} type="radio" name="capacity" value={size} />
          <label htmlFor={product._id+size}>{size}</label>
        </div>
    ) : '';

    let finalPrice = Math.ceil(daun * product.price * count)

    let items = daun * count;

    return (
        <div className="product">

            {/*лево*/}

            <div className="product__left">
                <div className="product__text">
                    <div className="product__text--title">{product.name} </div>
                    <div className="product__text--type">{product.type}</div>
                    <div className="product__text--subtitle">{product.title} </div>
                </div>


                <form onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {};
                }}
                >
                    <div className="big-text">Колличество {(product.form == 1) ? "капсул" : (product.form == 2) ? "грамм порошка" : "грамм шляпок"} ?</div>
                    <div className="product__checkbox">
                    {selectorCount}
                    </div>
                    <div className="big-text"> {(product.form == 1) ? "Колличество грам в капсуле ?" : " "} </div>
                    <div className="product__capacity">  {selectorValue} </div>
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

                    <div className="product__bottom--price"><span></span>  {daun ? "Итого: " + finalPrice : 'Не выбрано'}</div>
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


                    <div className="product-info__more--pic"><img  src={product.imagePath} alt={product.name}/></div>
                    <div className="product-info__more--name">{product.name} </div>
                    <div className="product-info__more--text">{product.text} </div>
                    <div className="product-info__more--type">{product.type}</div>
                    <div><button className="btn" onClick={addHandler}>В корзину</button></div>


                </div>
            </div>

    );
};

export default ProductItem

