import {FC, useEffect, useState, Suspense, lazy} from 'react';
import {IProduct} from "../../../../types";
import CashImage from '../../../../assets/icons/Shop/money.svg'
import {Counter} from "../Counter/ Counter";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../../store/cart/actions";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {Modal} from "../../../../shared/UI/Modal/Modal";
// import {ProductMore} from "../ProductMore/ProductMore";
import {motion} from "framer-motion";
import {LazyLoadImage} from "react-lazy-load-image-component";
const ProductMore = lazy(() => import('../ProductMore/ProductMore'));

interface IProductItem {
    product: IProduct,
    index: number
}


const ProductItem: FC<IProductItem> = ({product, index}) => {

    const [count, setCount] = useState(1)
    const [isShowProduct, setIsShowProduct] = useState(false);

    const [countId, setCountId] = useState(0)
    const [countTwoId, setCountTwoId] = useState(0)

    const [oneSelector, setOneSelector] = useState(0)
    const [twoSelector, setTwoSelector] = useState(0)
    const [threeSelector, setThreeSelector] = useState(0)


    const animateProducts = {
        visible: (index: number) => ({
            opacity: 1,
            transition: {
                delay: index*0.2,
            }
        }),
        hidden: {opacity: 0}
    };


    useEffect(() => {
        if ((product.form === 1) || (product.form === 3) || (product.form === 5) || (product.form === 6) || (product.form === 7)) {
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
        if((product.form === 8) || (product.form === 9) || (product.form === 10)){
            product.coefficient.find(function (item,index){
                setCountId(item.id)
                setOneSelector(1)
                item.coff.find(function (daun, index){
                    if(countTwoId === item.id && daun.id === countId){
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


    const pizda = Math.ceil((threeSelector * oneSelector / twoSelector) * count);


    let finalPrice = Math.ceil(pizda)

    const dispatch = useDispatch()


    const addHandler = () => {
        if (count > 0 && threeSelector > 0 && oneSelector > 0 && twoSelector) {
            dispatch(addToCart(product, pizda, oneSelector, twoSelector, count))
        }
        ;
    }

    const cart = useTypedSelector(state => state.cart)
    //@ts-ignore
    const inCart = cart.some(el => product._id === el._id);





    return (
        // <motion.div
        //     variants={animateProducts}
        //     initial='hidden'
        //     animate='visible'
        //     custom={index}
        //     className='product'>
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


                                <div className="product-top-content-quantity">
                                    <div
                                        className='product-top-content-quantity-title'>{(product.form === 1) ? 'Количество грамм порошка:' : (product.form === 2) ? 'Количество капсул:' : (product.form === 3) ? 'Количество капсул:' : (product.form === 4)
                                        ? 'Количество пакетиков:' : (product.form === 5) ? 'Количество грамм:' : (product.form === 7) ? 'Количество штук:' :  (product.form === 6) ? 'Объем:' :  ''}</div>
                                    {(product.form !=8 && product.form !=9 && product.form !=10) && <div className="product-top-content-quantity-checkbox">
                                        {product.price.map((item, index) =>
                                            <button key={item.id}
                                                    className={(item.count === oneSelector) ? 'product-top-content-quantity-checkbox-button active' : 'product-top-content-quantity-checkbox-button'}
                                                    onClick={() => {
                                                        setCountId(item.id);
                                                        setOneSelector(item.count);
                                                    }}>
                                                {item.count}
                                            </button>
                                        )}</div>}
                                </div>


                                <div className='product-top-content-two_box'>

                                    {((product.form === 4) || (product.form === 2) || (product.form === 8) || (product.form === 9) ||(product.form === 10)) && <form className='product-top-content-two_box-one'>
                                            <div className='product-top-content-two_box-one-title'>{(product.form === 2) ? 'Количество грамм в капсуле:' :
                                                ((product.form === 4 ) || (product.form === 8 )) ? 'Количество грамм:' : (product.form === 9 )  ? 'Количество капсул:' : (product.form === 10 ) ? 'Объем:' : ''}</div>
                                            {((product.form === 4) || (product.form === 2) || (product.form === 8) || (product.form === 9)|| (product.form === 10)) ?
                                                <div className='product-top-content-two_box-one-box'>


                                                    {product.coefficient.map((item, index) =>
                                                        <>
                                                            <input className=''
                                                                   key={product._id}
                                                                   id={product._id}
                                                                   type='radio'
                                                                   value={item.price}
                                                                   name='threeSelector'
                                                                   onClick={() => setTwoSelector(item.price)}
                                                                   onChange={() => setCountTwoId(item.id)}
                                                            />
                                                            <label htmlFor={product._id}>{item.price}</label>
                                                        </>
                                                    )}
                                                </div> : ''}
                                        </form>}


                                    <div className='product-top-content-two_box-two'>
                                        <div className='product-top-content-two_box-two-title'>Количество:</div>
                                        <Counter count={count} setCount={setCount}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='product-top-image'><LazyLoadImage src={product.imagePath}/></div>
                    </div>
                    <div className='product-bottom'>
                        <div className='product-bottom-cash'>
                            <div className='product-bottom-cash-image'><img src={CashImage}/></div>
                            <div className='product-bottom-cash-number'>
                                <span></span> {(oneSelector && twoSelector) ? "Итого: " + finalPrice : 'Итого: 0'}</div>
                        </div>
                        <div className='product-bottom-buttons'>
                            <div className='product-bottom-buttons-pay'>
                                <button
                                    className={`${inCart ? 'product-bottom-buttons-pay-btn buying' : 'product-bottom-buttons-pay-btn'}`}
                                    onClick={addHandler}>{inCart ? `Добавлено` : `Купить`}</button>

                            </div>
                            {(product.form != 7) && <div className='product-bottom-buttons-more'>
                                <button className="product-bottom-buttons-more-btn"
                                        onClick={() => setIsShowProduct(true)}>Подробнее
                                </button>

                                <Modal visible={isShowProduct} setVisible={setIsShowProduct}>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <ProductMore product={product} />
                                    </Suspense>
                                </Modal>

                            </div>}
                        </div>
                    </div>
                </div>
            </div>
</div>
        // </motion.div>
    );
};

export default ProductItem;



