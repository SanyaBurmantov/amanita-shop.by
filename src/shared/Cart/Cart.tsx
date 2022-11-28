import React, {FC, useCallback, useEffect, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../store/cart/actions";
// @ts-ignore
import cartIcon from "../../assets/icons/cart.svg"

import {useTelegram} from "../../hooks/useTelegram";
import axios from "axios";
import * as url from "url";
import {IPrice} from "../../types";


export const Cart:FC = () => {
    const [name, setName] = useState('');

    const [number, setNumber] = useState('');

    const {tg, queryId} = useTelegram();

    const [isShowCart, setIsShowCart] = useState(false);

    const cart = useTypedSelector(state => state.cart)

    const total = cart.reduce((acc, item) =>
        acc + item.count
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

        const token = "5395453268:AAFNhZwVm1ScGFb2jiukzA7H8LIZwLxBc9E";
        const chatIdMark = "424119633" ;
        const chatIdSanya = "408745156" ;
        const data = {
            name,
            number,
            products: cart,
            totalPrice: total,
            queryId,
        }
        // if(cart.length === 0) {
        //     tg.MainButton.hide();
        // } else {
        //     tg.MainButton.show();
        //     tg.MainButton.setParams({
        //         text: `Купить ${total}`
        //     })
        // }

        // _id: string
        // name: string
        // title: string
        // form: number
        // imagePath: string
        // price: IPrice[]
        // type: string
        // text: string,
        let s1 = '';
        let s2 = '';
        let s3 = '';
        let s4 = '';
        let posValue = data.products.length
        let strMatrix = ''
        let strPr = data.products.map(el => {
            s1 = "%0A %09" + el.name.toString()
            strMatrix = strMatrix + s1;
            s2 = "%0A %09" + el.type.toString();
            strMatrix = strMatrix + s2
            // s3 = el.price.length.toString()
            // strMatrix = strMatrix + s3
            s4 = "%0A %09Цена " + el.count.toString() + "BYN%0A"
            strMatrix = strMatrix + s4

        })

        let message = "Клиент: " + data.name + "%0AНомер телефона" + data.number + "%0AЧисло товаров: " + posValue + "%0AТовары: " + strMatrix + "%0AИтоговая цена: " + data.totalPrice.toString() + "BYN"

        const URL_API = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatIdSanya}&text=${message}&parse_mode=html`;
        let api = new XMLHttpRequest();
        // @ts-ignore
        api.open("GET", URL_API, true)
        api.send();

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
                                <div className="cart__data--price">Цена за товар: {`${item.count} BYN, Описание `}</div>
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