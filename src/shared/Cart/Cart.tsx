import React, {FC, useCallback, useEffect, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../store/cart/actions";
// @ts-ignore
import cartIcon from "../../assets/icons/cart.svg"

import {useTelegram} from "../../hooks/useTelegram";

export const Cart:FC = () => {
    const [name, setName] = useState('');

    const [number, setNumber] = useState('');

    const {tg, queryId} = useTelegram();

    const [isShowCart, setIsShowCart] = useState(false);

    const cart = useTypedSelector(state => state.cart)

    const total = cart.reduce((acc, item) =>
        acc + item.price * item.count

    , 0)

    //ts-ignore
    useEffect(()=> {
        if(!name || !number){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [name, number])



    const onChangeName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(e.target.value)
    }

    const onChangeNumber = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setNumber(e.target.value)
    }


    const dispatch = useDispatch()

    const removeHandler = (id:string) => {
        dispatch(removeFromCart(id))
    }

    // const removeAll = (cart: []) => {
    //     dispatch(removeFromCart())
    // }


    const onSendData = useCallback(() => {
        const data = {
            name,
            number,
            products: cart,
            totalPrice: total,
            queryId,
        }
        if(cart.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${total}`
            })
        }

        fetch('https://46.53.246.101:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [name, number, cart, total, queryId])



    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)

        return () => {
            tg.offEvent('mainButtonClicked', onSendData);

        }
    }, [onSendData])

    return(
        <div className="cart">
            <div className="cart__picture">
                <div className="" onClick={() => setIsShowCart(!isShowCart)}>
                    <img className="cart__picture--img" src={cartIcon} alt="cart" />
                    <div className="cart__picture--text">{cart.length}</div>
                </div>
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
                    <div>


                   </div>
                    <div className="form">
                        <h3>Введите ваши данные</h3>
                        <input className='input'
                               type='text'
                               placeholder='Имя'
                               value={name}
                               onChange={onChangeName} />
                        <input className='input'
                               type='text'
                               placeholder='Номер телефона'
                               value={number}
                               onChange={onChangeNumber} />
                    </div>

                    <div className="btn-telegram" onClick={onSendData}>Купить </div>
                    <div className="cart__total">
                        Общая сумма: <b>{Math.round(total)}</b>
                    </div>
                </div>

            </div>

        </div>
    )
}