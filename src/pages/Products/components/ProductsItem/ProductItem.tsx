import {FC, SyntheticEvent, useEffect, useState, Suspense, lazy} from 'react';
import {IProduct} from "../../../../types";
import './ProductItem.scss'
import {Counter} from "../Counter/ Counter";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../../store/cart/actions";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import Modal from "../../../../shared/UI/Modal/Modal";
import Preloader from "../../../../shared/UI/Preloader/Preloader";
import {LazyLoadImage} from "react-lazy-load-image-component";
const ProductMore = lazy(() => import('../ProductMore/ProductMore'));

interface IProductItem {
    product: IProduct,
    index: number
}


const ProductItem: FC<IProductItem> = ({product, index}) => {

    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const [productIdOne, setProductIdOne] = useState(-1)
    const [productIdTwo, setProductIdTwo] = useState(-1)
    const [countFormOne, setCountFormOne] = useState(1)
    const [countFormTwo, setCountFormTwo] = useState(1)
    const [coefficient, setCoefficient] = useState(0)
    const [isShowProduct, setIsShowProduct] = useState(false)

    useEffect(() => {

        if (product.form === 1 && productIdOne !=-1) {
            setProductIdTwo(1)
            setCountFormTwo(product.productCountTwo[0].count)
            setCoefficient(product.productCountTwo[0].coefficient[productIdOne].count)
        }

        if (product.form === 2 && productIdTwo !=-1 && productIdOne !=-1) {
            setCoefficient(product.productCountTwo[productIdTwo].coefficient[productIdOne].count);
        }

        if (product.form === 3 && productIdTwo !=-1) {
            setProductIdOne(1)
            setCountFormOne(product.productCountOne[0].count);
            setCoefficient(product.productCountTwo[0].coefficient[productIdTwo].count);
        }

        }, [productIdTwo, productIdOne])

    let finalPrice = Math.ceil(((countFormOne * coefficient) / countFormTwo) * count);

    const addHandler = () => {
        if (count > 0 && productIdOne != -1 && productIdTwo != -1) {
            dispatch(addToCart(product, count, countFormOne, countFormTwo, finalPrice))
        }
    }

    const cart = useTypedSelector(state => state.cart)

    const inCart = cart.some(el => product.id === el.id);

    return (

        <div className='product'>
            <div className='product-wrapper'>
                <div className='product-image'><LazyLoadImage src={product.imagePath}/></div>
                <div className='product-title'>
                    <h3>{product.name}</h3>
                    <span>{product.type}</span>
                </div>
                <p className='product-subtitle'>{product.subtitle}</p>
                <form onSubmit={(e: SyntheticEvent) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {};
                }}>
                    {product.form != 3 && <div className='product-form-one'>
                        <span>{product.productDescription.title}</span>
                        <div className='product-buttons'>
                            {product.productCountOne.map((item) =>
                                <button type='button'
                                        key={item.id}
                                        onClick={() => {
                                            setProductIdOne(item.id);
                                            setCountFormOne(item.count);
                                        }}
                                        className={(countFormOne === item.count) ? 'product-button active' : 'product-button'}
                                >{item.count}</button>
                            )}
                        </div>
                    </div>}


                    {product.form != 1 && <div className='product-form-two'>
                        <span>{product.productDescription.subtitle}</span>

                        <div className='product-radio'>
                            {product.productCountTwo.map((item) =>
                                <div className='custom-radio' key={item.id}>
                                    <input type='radio' name='productCountTwo'
                                           id={String(product.id) + String(item.id) + String(item.coefficient)}
                                    />
                                    <label htmlFor={String(product.id) + String(item.id) + String(item.coefficient)}
                                           className="radio-label"
                                           onClick={() => {
                                               setProductIdTwo(item.id);
                                               setCountFormTwo(item.count);
                                           }
                                    }
                                    />
                                    <span>{item.count}</span>
                                </div>
                            )}
                        </div>
                    </div>}
                    <Counter count={count} setCount={setCount}/>
                    <div className='product-form-total'>
                        <span className='product-form-total__total-title'>Итого</span>
                        <span className='product-form-total__total-count'>{finalPrice} BYN</span>
                    </div>
                <div className='product-buttons'>
                    <button className={inCart ? 'product-buttons__pay buying' : 'product-buttons__pay'}
                            onClick={addHandler}>{inCart ? `Добавлено` : `В корзину`}</button>
                    {product.more && <button className='product-buttons__more' onClick={()=> setIsShowProduct(true)}>Подробнее</button>}
                </div>
                </form>
                <Modal visible={isShowProduct} setVisible={setIsShowProduct}>
                    <Suspense fallback={<div><Preloader/></div>}>
                        {isShowProduct && <ProductMore product={product}/>}
                    </Suspense>
                </Modal>
            </div>
        </div>
    );
};

export default ProductItem;
