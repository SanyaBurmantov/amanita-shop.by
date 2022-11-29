import React, {FC, useCallback, useEffect, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../store/cart/actions";
// @ts-ignore
import cartIcon from "../../assets/icons/cart.svg"
import './Card.scss'
import {useTelegram} from "../../hooks/useTelegram";
import axios from "axios";
import * as url from "url";
import {IPrice} from "../../types";
import {ItemCard} from "./ItemCard";
import {Modal} from "../Modal/Modal";
import CashIco from '../../assets/icons/money.svg'


export const Cart: FC = () => {

    const [name, setName] = useState('');

    const [number, setNumber] = useState('');

    const {tg, queryId} = useTelegram();

    const [isShowCart, setIsShowCart] = useState(false);

    const cart = useTypedSelector(state => state.cart)

    const total = cart.reduce((acc, item) =>
            acc + item.count
        , 0)

    //ts-ignore
    useEffect(() => {
        if (!name || !number) {
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

    const removeHandler = (id: string) => {
        dispatch(removeFromCart(id))
    }

    // const removeAll = (cart: []) => {
    //     dispatch(removeFromCart())
    // }


    const onSendData = useCallback(() => {

        const token = "5395453268:AAFNhZwVm1ScGFb2jiukzA7H8LIZwLxBc9E";
        const chatIdMark = "424119633";
        const chatIdSanya = "408745156";
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

    return (
        <div className="cart">
            <div className="cart__picture">
                <div className="" onClick={() => setIsShowCart(!isShowCart)}>
                    <img className="cart__picture--img" src={cartIcon} alt="cart"/>
                    <div className="cart__picture--text">{cart.length}</div>
                </div>
            </div>
            <Modal visible={isShowCart} setVisible={setIsShowCart}>
                <div className='cart__data--content'>
                    <div className='cart__data--content-title'>Корзина</div>
                    {(cart.length > 0) && <div className='cart__data--content-items'>
                        {cart.map((item, key) => <ItemCard item={item} removeHandler={removeHandler}/>)}
                    </div>}
                    {(cart.length === 0) && <div className='cart__data--content-no-item'>Ваша корзина пуста!</div>}
                    <div className='cart__data--content-total'>
                        <div className='cart__data--content-total-ico'><img src={CashIco}/></div>
                        <div className='cart__data--content-total-summ'>Общая сумма: <b>{Math.round(total)} BYN</b>
                        </div>
                    </div>
                    {(cart.length > 0) && <div className='form'>
                        <div className='cart__data--content-form'>
                            <div className='cart__data--content-form-title'>Введите ваши данные:</div>
                            <input className='cart__data--content-form-input-name'
                                   type='text'
                                   placeholder='Имя'
                                   value={name}
                                   onChange={onChangeName}/>
                            <input className='cart__data--content-form-input-tel'
                                   type='text'
                                   placeholder='Номер телефона'
                                   value={number}
                                   onChange={onChangeNumber}/>
                        </div>
                        <div className='cart__data--content-button'>
                            <button className='cart__data--content-button-telegram' onClick={onSendData}>Оформить
                                заказ
                            </button>
                        </div>
                    </div>}
                </div>
            </Modal>
        </div>
    )
}