import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {IProduct} from "../../../types";
import Arrows from '../../../assets/icons/Slider-arrows.svg'

interface ProductForm{
    product: IProduct,
    count: number,
    setCount: Dispatch<SetStateAction<number>>,
    daun: any,
    setDaun: any

}

export const ProductForm: FC<ProductForm> = ({product, setCount, count, daun, setDaun}) => {

    const [petyx, setPetyx] = useState(1)


    function quantityIncrement() {
        if (count>=1){
            setCount(count+1)
        }
    }

    function quantityDecrement() {
        if (count>1){
            setCount(count-1)
        }
    }















    return (
        <form onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {};
        }}>
            <form className="product-top-content-quantity">
                {(product.form === 1) ? 'Количество грамм порошка:' :
                (product.form === 2 || 6) ? 'Количество капсул:' : (product.form === 3) ? 'Количество грамм капсул:' :
                    (product.form === 5) ? 'Объем:' : (product.form === 4) ? 'Количество пакетиков:' : "Количество грамм:"}


                <div className="product-top-content-quantity-checkbox">
                    {product.price.map((item, index) =>
                    <span>
                        <input className=''
                               onChange={event => setDaun(event.target.value)}
                               id={product._id}
                               type="radio"
                               name="capacity"
                               value={(petyx===1) ? item.price : item.priceTwo}/>
                            <label htmlFor={product._id}>{item.count}</label>
                    </span>
                )}</div>

            </form>
























            <div className='product-top-content-two_box'>
                <form className='product-top-content-two_box-one'>
                    <div className='product-top-content-two_box-one-title'>{(product.form === 3)
                        ? "Колличество капсул:" : (product.form === 2) ? 'Грамм:' : (product.form === 4) ? 'Грамм пакетиков:' : ''}</div>
                    {product.coefficient ? <div className='product-top-content-two_box-one-box'>


                        {product.coefficient.map((item, index) =>
                            <span>
                                <input className='' onClick={()=>setPetyx(item.id)} id={product._id} type='radio' value={item.id} name='capacityTwo'/>
                                <label htmlFor={product._id}>{item.coefficient}</label>
                            </span>
                        )}
                    </div> : ''}
                </form>




                <div className='product-top-content-two_box-two'>
                    <div className='product-top-content-two_box-two-title'>Количество:</div>
                    <div className='product-top-content-two_box-two-box'>
                        <div className='product-top-content-two_box-two-box-left_arrow'
                             onClick={quantityDecrement}><img src={Arrows}/></div>
                        <div className='product-top-content-two_box-two-box-number'>{count}</div>
                        <div className='product-top-content-two_box-two-box-right_arrow'
                             onClick={quantityIncrement}><img src={Arrows}/></div>
                    </div>
                </div>

            </div>
        </form>
    );
};

