import React, {FC, useCallback, useEffect, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {removeCartAll, removeFromCart} from "../../store/cart/actions";
import {motion} from "framer-motion";
// @ts-ignore
import cartIcon from "../../assets/icons/cart.svg"
import './Card.scss'
import {useTelegram} from "../../hooks/useTelegram";
import axios from "axios";
import * as url from "url";
import {IPrice} from "../../types";
import {ItemCard} from "./ItemCard";
import {Modal} from "../Modal/Modal";
// @ts-ignore
import CashIco from '../../assets/icons/money.svg'
import {useInput} from "../../hooks/useInput";
import {useModalOpen} from "../../hooks/useModalOpen";


export const Cart: FC = () => {

    const nameInputHooks = useInput('', {isEmpty: true, minLength: 2, testName: true})
    const telInputHooks = useInput('', {isEmpty: true, testPhone: true, minLength: 12})

    const [name, setName] = useState('');

    const [number, setNumber] = useState('');

    const {tg, queryId} = useTelegram();

    const [isShowCart, setIsShowCart] = useState(false);

    const [submitTg, setSubmitTg] = useState(false)

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
        nameInputHooks.onChange(e)
    }

    const onChangeNumber = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setNumber(e.target.value)
        telInputHooks.onChange(e)
    }


    const dispatch = useDispatch()

    const removeHandler = (id: string) => {
        dispatch(removeFromCart(id))
    }

    const removeAll = () => {
        dispatch(removeCartAll())
    }

    const hideSubmitMessage = () => {
        setTimeout(() => setSubmitTg(false), 10000);
    }


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

        removeAll()
        setSubmitTg(true)
        hideSubmitMessage()

    }, [name, number, cart, total, queryId])





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
                    <h3 className='cart__data--content-title'>Корзина</h3>
                    {(cart.length > 0) && <div className='cart__data--content-items'>
                        {cart.map((item, key) => <ItemCard item={item} removeHandler={removeHandler}/>)}
                    </div>}
                    {(cart.length === 0 && !submitTg) && <>
                        <div className='cart__data--content-no-item'>Ваша корзина пуста!</div>
                        <div className='cart__data--content-total'>
                            <div className='cart__data--content-total-ico'><img src={CashIco}/></div>
                            <div className='cart__data--content-total-summ'>Общая
                                сумма: <b>{Math.round(total)} BYN</b>
                            </div>
                        </div>
                    </>}
                    {submitTg && <div className='cart__data--content-form-submit'>
                        <div className='cart__data--content-form-submit-title'>Спасибо за заказ!</div>
                        <div className='cart__data--content-form-submit-subtitle'>В ближайшее время менеджер свяжется с
                            вами для подтверждения заказа!
                        </div>
                        <div className="cart__data--content-form-submit-line-wrapper">
                        <motion.div
                            className='cart__data--content-form-submit-line'
                            initial={{width: "100%"}}
                            animate={{width: "1%"}}
                            transition={{duration: 10}}
                        />
                        </div>
                    </div>}
                    {(cart.length > 0) && <div className='form'>
                        <div className='cart__data--content-form'>
                            <div className='cart__data--content-form-title'>Введите ваши данные:</div>
                            {(nameInputHooks.isDirty && nameInputHooks.isEmpty) &&
                                <div style={{color: 'red'}}>Поле не может быть пустым</div>}
                            {(nameInputHooks.isDirty && nameInputHooks.minLengthError) &&
                                <div style={{color: 'red'}}>Поле должно содержать более 2 символов</div>}
                            {(nameInputHooks.isDirty && nameInputHooks.nameError) &&
                                <div style={{color: 'red'}}>Можно вводить только буквы</div>}
                            <input className='cart__data--content-form-input-name'
                                   type='text'
                                   placeholder='Имя'
                                   value={nameInputHooks.value}
                                   onBlur={e => nameInputHooks.onBlur(e)}
                                   onChange={onChangeName}
                            />
                            {(telInputHooks.isDirty && telInputHooks.isEmpty) &&
                                <div style={{color: 'red'}}>Поле не может быть пустым</div>}
                            {(telInputHooks.isDirty && telInputHooks.PhoneError) &&
                                <div style={{color: 'red'}}>Можно вводить только цифры</div>}
                            {(telInputHooks.isDirty && telInputHooks.minLengthError) &&
                                <div style={{color: 'red'}}>Напишите номер в формате 375ххххххххх</div>}
                            <input className='cart__data--content-form-input-tel'
                                   type='tel'
                                   maxLength={13}
                                   placeholder='Номер телефона'
                                   value={telInputHooks.value}
                                   onBlur={e => telInputHooks.onBlur(e)}
                                   onChange={onChangeNumber}
                            />
                        </div>
                        <div className='cart__data--content-button'>
                            <button disabled={!telInputHooks.inputValid || !nameInputHooks.inputValid}
                                    className={(!telInputHooks.inputValid || !nameInputHooks.inputValid) ? 'cart__data--content-button-telegram  disabled' : 'cart__data--content-button-telegram'}
                                    onClick={onSendData}>Оформить
                                заказ
                            </button>
                        </div>
                    </div>}
                </div>
            </Modal>
        </div>
    )
}