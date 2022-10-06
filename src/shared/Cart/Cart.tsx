import {FC, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../store/cart/actions";
import cartIcon from "../../assets/icons/cart.svg"

export const Cart:FC = () => {
    const [isShowCart, setIsShowCart] = useState(false);

    const cart = useTypedSelector(state => state.cart)

    const total = cart.reduce((acc, item) =>
        acc + item.price * item.count

    , 0)

    const dispatch = useDispatch()

    const removeHandler = (id:string) => {
        dispatch(removeFromCart(id))
    }

    return(
        <div className="cart">
            <div className="cart__picture">
                <button className="btn" onClick={() => setIsShowCart(!isShowCart)}>
                    <img className="cart__picture--img" src={cartIcon} alt="cart" />
                    <div className="cart__picture--text">{cart.length}</div>
                </button>
            </div>
            <div className={isShowCart ? 'cart__data active' : 'cart__data'} onClick={() => setIsShowCart(false)}>
                <div className={isShowCart ? 'cart__data--content active' : 'cart__data--content'} onClick={e => e.stopPropagation()}>
                    {cart.map(item => (
                        <div className="cart__data--elem" key={`cart item ${item.name}`}>
                            <img className="cart__data--picture" src={item.imagePath} alt={item.name}/>
                            <div>
                                <div className="cart__data--name">К покупке {item.name}</div>
                                <div className="cart__data--price">В колличестве {`${item.count} единиц, стоимостью ${item.price} за шт.`}</div>
                                <button className="cart__data--button" onClick={() => removeHandler(item._id)}>Удалить
                                </button>
                            </div>
                        </div>

                    ))}
                    <div className="cart__total">
                        Общая сумма: <b>{total}</b>
                    </div>
                </div>
            </div>
        </div>
    )
}