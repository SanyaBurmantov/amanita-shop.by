import React, {FC, useEffect, useState} from 'react';
import {IProduct} from "../../../../types";
import CashImage from '../../../../assets/icons/money.svg'
import {Counter} from "../ Counter/ Counter";


interface IProductItem {
    product: IProduct
}


const ProductItem: FC<IProductItem> = ({product}) => {

    const [count, setCount] = useState(1)
    const [isShowProduct, setIsShowProduct] = useState(false);

    const [countId, setCountId] = useState(0)
    const [countTwoId, setCountTwoId] = useState(0)

    const [oneSelector, setOneSelector] = useState(0)
    const [twoSelector, setTwoSelector] = useState(0)
    const [threeSelector, setThreeSelector] = useState(0)


    useEffect(() => {
        if ((product.form === 1) || (product.form === 3) || (product.form === 5) || (product.form === 6)) {
            product.coefficient.find(function (item, index) {
                setTwoSelector(item.price)
                setCountTwoId(item.id)
                item.coff.find(function (daun, index) {
                    if (countTwoId === item.id && daun.id === countId) {
                        setThreeSelector(daun.coefficient)
                    }
                })
            })
        }
    }, [twoSelector])


    useEffect(() => {
        product.coefficient.find(function (item, index) {
            item.coff.find(function (daun, index) {
                if (countTwoId === item.id && daun.id === countId) {
                    setThreeSelector(daun.coefficient)
                }
            })
        })
    }, [twoSelector, oneSelector])


    let finalPrice = Math.ceil((threeSelector * oneSelector / twoSelector) * count)

    return (
        <div className='product'>
            <div className='product-container'>
                <div className='product-column'>
                    <div className='product-top'>
                        <div className='product-top-content'>
                            <div className='product-top-content-title'>{product.name}</div>
                            <div className='product-top-content-type'>{product.type}</div>
                            <div className='product-top-content-subtitle'>{product.title}</div>


                            <form onSubmit={(e: React.SyntheticEvent) => {
                                e.preventDefault();
                                const target = e.target as typeof e.target & {};
                            }}>
                                <form className="product-top-content-quantity">
                                    {(product.form === 1) ? 'Количество грамм порошка:' : (product.form === 2) ? 'Количество капсул:' : (product.form === 3) ? 'Количество капсул:' : (product.form === 4) ? 'Количество пакетиков:' : (product.form === 5) ? 'Количество грамм:' : 'Объем:'}


                                    <div className="product-top-content-quantity-checkbox">
                                        {product.price.map((item, index) =>
                                                <span>
                                                        <input className=''
                                                               type='radio'
                                                               id={product._id}
                                                               name="capacity"
                                                               value={item.count}
                                                               onClick={() => setOneSelector(item.count)}
                                                               onChange={() => setCountId(item.id)}
                                                        />
                        <label htmlFor={product._id}>{item.count}</label>
                    </span>
                                        )}</div>

                                </form>

                                <div className='product-top-content-two_box'>
                                    <form className='product-top-content-two_box-one'>
                                        <div
                                            className='product-top-content-two_box-one-title'>{(product.form === 2) ? 'Количество грамм в капсуле:' :
                                            (product.form === 4) ? 'Количество грамм:' : ''}</div>
                                        {((product.form === 4) || (product.form === 2)) ?
                                            <div className='product-top-content-two_box-one-box'>


                                                {product.coefficient.map((item, index) =>
                                                        <span>
                                <input className=''
                                       id={product._id}
                                       type='radio'
                                       value={item.price}
                                       name='threeSelector'
                                       onClick={() => setTwoSelector(item.price)}
                                       onChange={() => setCountTwoId(item.id)}
                                />
                                <label htmlFor={product._id}>{item.price}</label>
                            </span>
                                                )}
                                            </div> : ''}
                                    </form>

                                    <div className='product-top-content-two_box-two'>
                                        <div className='product-top-content-two_box-two-title'>Количество:</div>
                                        <Counter count={count} setCount={setCount}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='product-top-image'><img src={product.imagePath}/></div>
                    </div>
                    <div className='product-bottom'>
                        <div className='product-bottom-cash'>
                            <div className='product-bottom-cash-image'><img src={CashImage}/></div>
                            <div className='product-bottom-cash-number'>
                                <span></span> {(oneSelector && twoSelector) ? "Итого: " + finalPrice : 'Итого: 0'}</div>
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



