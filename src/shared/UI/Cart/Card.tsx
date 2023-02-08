import {FC, useState} from "react";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {motion} from "framer-motion";
import './Card.scss'
import {ItemCard} from "./ItemCard";
import CashIco from '../../../assets/icons/Shop/money.svg'
import {CardForm} from "./CardForm/CardForm";


interface Card {

}

const Cart: FC<Card> = ({}) => {

    const [submitTg, setSubmitTg] = useState(false)

    const cart = useTypedSelector(state => state.cart)

    const total = cart.reduce((acc, item) => acc + item.finalPrice, 0)


    return (
        <div className="cards">

            <h3 className='cards__title'>Корзина</h3>


            <div className='cards-list'>
                {cart.map((item, key) =>
                    <ItemCard item={item} key={item.id}/>
                )}
            </div>


            {(cart.length === 0 && !submitTg) && <span className='cards__empty'>Ваша корзина пуста!</span>}


            {submitTg && <div className='cards-submit'>
                <h4 className='cards-submit__title'>Спасибо за заказ!</h4>
                <span className='cards-submit__subtitle'>В ближайшее время менеджер свяжется с
                        вами для подтверждения заказа!
                    </span>
                <div className="cards-submit-wrapper">
                    <motion.div
                        className='cards-submit__line'
                        initial={{width: "100%"}}
                        animate={{width: "1%"}}
                        transition={{duration: 10}}
                    />
                </div>
            </div>}

            {!submitTg && <div className='cards-total'>
                <img src={CashIco}/>
                <span>Общая сумма:</span> <span> {Math.round(total)} BYN</span>
            </div>}


            {(cart.length > 0) && <CardForm total={total} cart={cart} setSubmitTg={setSubmitTg}/>}


        </div>
    )
}

export default Cart;