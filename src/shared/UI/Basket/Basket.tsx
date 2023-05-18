import {FC, useState} from 'react';
import './Basket.scss';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {ItemCard} from "./ItemCard/ItemCard";
import {BasketForm} from "./BasketForm/BasketForm";
import {motion} from "framer-motion";
import {TransitionGroup, CSSTransition} from "react-transition-group";


interface Basket {

}


const Basket: FC<Basket> = () => {

    const [submitTg, setSubmitTg] = useState(false)

    const cart = useTypedSelector(state => state.cart)

    const total = cart.reduce((acc, item) => acc + item.finalPrice, 0)

    return (
        <div className='basket'>

            <h3 className='basket-title'>Корзина товаров</h3>


            <div className='cards'>

                {cart.length != 0 &&
                            <div className='cards-list'>
                                <TransitionGroup component='ul-product'>
                                    {cart.map((item, key) =>
                                        <CSSTransition
                                            key={item.id}
                                            timeout={500}
                                            classNames='card-item'>
                                            <ItemCard item={item} key={item.id}/>
                                        </CSSTransition>)}
                                </TransitionGroup>
                            </div>
                }

                <TransitionGroup component='empty'>
                    {(!submitTg && cart.length === 0) && (

                        <CSSTransition classNames='empty' timeout={500}>
                        <div className='cards-empty'>Ваша корзина пуста!</div>
                        </CSSTransition>
                        )}
                </TransitionGroup>



            </div>

            {submitTg && <div className='basket-submit'>
                <h4 className='basket-submit__title'>Спасибо за заказ!</h4>
                <p className='basket-submit__subtitle'>В ближайшее время менеджер свяжется с вами для подтверждения
                    заказа!</p>
                <div className='basket-submit-wrapper'>
                    <motion.div
                        className='basket-submit-wrapper__line'
                        initial={{width: "100%"}}
                        animate={{width: "1%"}}
                        transition={{duration: 10}}
                    />
                </div>
            </div>}

            <TransitionGroup component='ordering'>

                {(cart.length > 0) && (

                    <CSSTransition classNames='ordering' timeout={500}>
                        <div className='ordering'>
                            <div className='basket-ordering'>
                                <p className='basket-ordering__title'>Оформление заказа</p>
                                {window.innerWidth < 992 &&
                                    <div className='basket-total'>
                                        <div className='basket-total__count'>Общая
                                            сумма:<span> {Math.round(total)} BYN </span>
                                        </div>
                                    </div>


                                }
                                <p className='basket-ordering__subtitle'>*Перед оформлением заявки просьба внимательно
                                    проверить
                                    содержимое корзины.</p>
                            </div>
                            <BasketForm total={total} cart={cart} setSubmitTg={setSubmitTg}/>
                        </div>

                    </CSSTransition>



                    )}


            </TransitionGroup>

            <div className='basket-footer'>
                <p>Республика Беларусь, Минск</p>
                <p>© 2022 Amanita Shop | Микродозинг | Беларусь</p>
            </div>


        </div>
    );
};

export default Basket;