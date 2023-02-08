import {FC, SetStateAction, useCallback, useState} from 'react';
import {useInput} from "../../../../hooks/useInput";
import './CardForm.scss'
import InputMask from "react-input-mask";
import {ICartItem, TypeSetState} from "../../../../types";
import {removeCartAll} from "../../../../store/cart/actions";
import {useDispatch} from "react-redux";
import {useTelegram} from "../../../../hooks/useTelegram";

interface CardForm {
    total: number,
    cart:  ICartItem[],
    setSubmitTg: TypeSetState<boolean>
}

export const CardForm: FC<CardForm> = ({total, cart, setSubmitTg}) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch()

    const {tg, queryId} = useTelegram();

    const nameInputHooks = useInput('', {isEmpty: true, minLength: 2})

    const telInputHooks = useInput('', {testPhone: true})


    const onChangeName = (e: { target: { value: SetStateAction<string>; }; }) => {
        setName(e.target.value)
        nameInputHooks.onChange(e)
    }

    const onChangeNumber = (e: { target: { value: SetStateAction<string>; }; }) => {
        setNumber(e.target.value)
        telInputHooks.onChange(e)
    }



    const onSendData = useCallback(() => {

        const token = "5395453268:AAFNhZwVm1ScGFb2jiukzA7H8LIZwLxBc9E";
        const chatIdMark = "424119633";
        const chatIdSanya = "408745156";
        const chatIdKarina = "483278857";
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
        let s5 = '';
        let s6 = '';

        let posValue = data.products.length
        let strMatrix = ''
        let strPr = data.products.map(el => {
            s1 = "%0A %09" + el.name.toString();
            strMatrix = strMatrix + s1;
            s2 = "%0A %09" + el.type.toString();
            strMatrix = strMatrix + s2;
            if (el.productDescription.title){
            s3 = "%0A %09 " + el.productDescription.title + el.countFormOne.toString();
            strMatrix = strMatrix + s3;
            }
            if (el.productDescription.subtitle){
            s4 = "%0A %09 " + el.productDescription.subtitle + el.countFormTwo.toString();
            strMatrix = strMatrix + s4;
            }
            s5 = "%0A %09" + "Количество единиц товара: " + el.count.toString();
            strMatrix = strMatrix + s5;
            s6 = "%0A %09Цена " + el.finalPrice.toString() + "BYN%0A";
            strMatrix = strMatrix + s6;
        })

        let message = "Клиент: " + data.name + "%0AНомер телефона" + data.number + "%0AЧисло товаров: " + posValue + "%0AТовары: " + strMatrix + "%0AИтоговая цена: " + data.totalPrice.toString() + "BYN"

        const URL_API_1 = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatIdSanya}&text=${message}&parse_mode=html`;
        const URL_API_2 = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatIdMark}&text=${message}&parse_mode=html`;
        const URL_API_3 = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatIdKarina}&text=${message}&parse_mode=html`;
        let api = new XMLHttpRequest();
        let api1 = new XMLHttpRequest();
        let api2 = new XMLHttpRequest();
        api.open("GET", URL_API_1, true);
        api1.open("GET", URL_API_2, true);
        api2.open("GET", URL_API_3, true);
        api.send();
        api1.send();
        api2.send();

        dispatch(removeCartAll())
        setSubmitTg(true)
        setTimeout(() => setSubmitTg(false), 10000);

    }, [name, number, cart, total, queryId])




    return (
        <form className='cards-form'>

            <span>Введите ваши данные:</span>

            {(nameInputHooks.minLengthError && nameInputHooks.isDirty) &&
                <span className='input-error'>*Поле должно содержать 2 или более букв</span>}
            <input className='cards-form__input-name'
                   type='text'
                   placeholder='Имя'
                   value={nameInputHooks.value.replace(/[^a-zA-ZА-Яа-яЁё]/g, '')}
                   onBlur={e => nameInputHooks.onBlur(e)}
                   onChange={onChangeName}
            />

            {(telInputHooks.isDirty && telInputHooks.phoneError) &&
                <span className='input-error'>*Введите корректный номер</span>}
            <InputMask className='cards-form__input-tel'
                       type='tel'
                       mask="+375(99)999-99-99"
                       disabled={false}
                       placeholder='Номер телефона'
                       value={telInputHooks.value}
                       onBlur={(e: FocusEvent) => telInputHooks.onBlur(e)}
                       onChange={onChangeNumber}
            >
            </InputMask>

            <div className='cards-form-button'>
                <button onClick={onSendData}
                    disabled={(!telInputHooks.inputValid || !nameInputHooks.inputValid)}
                        className={(!telInputHooks.inputValid || !nameInputHooks.inputValid) ? 'disabled' : ''}>
                    Оформить заказ
                </button>
            </div>
        </form>
    );
};
