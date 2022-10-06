
import {FC, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../store/cart/actions";

export const Cart:FC = () => {
    const [isShowCart, setIsShowCart] = useState(false);

    const cart = useTypedSelector(state => state.cart)
    const total = cart.reduce((acc, item) =>
        acc + item.price
    , 0)

    const dispatch = useDispatch()

    const removeHandler = (id:string) => {
        dispatch(removeFromCart(id))
    }

    return(
        <div>
            <div>
                <button onClick={() => setIsShowCart(!isShowCart)}>
                    <div>{cart.length}</div>
                </button>
            </div>
            <div className={isShowCart ? 'cart active' : 'cart'}>
                {cart.map(item => (
                    <div key={`cart item ${item.name}`}>
                        <img src={item.imagePath} alt={item.name}/>
                        <div>
                            <div>{item.name}</div>
                            <div>{`${item.count} x ${item.price}`}</div>
                            <button onClick={() => removeHandler(item._id)}>Удалить</button>
                        </div>
                    </div>
                ))}
                <div>
                    Total: <b>{total}</b>
                </div>
            </div>
        </div>
    )
}