import {FC, SetStateAction, useCallback, useState} from 'react';
import {useInput} from "../../../../hooks/useInput";
import './BasketForm.scss'
import InputMask from "react-input-mask";
import {ICartItem, TypeSetState} from "../../../../types";
import {removeCartAll} from "../../../../store/cart/actions";
import {useDispatch} from "react-redux";
import {useTelegram} from "../../../../hooks/useTelegram";
import {ReactComponent as AmanitaLogo} from '../../../../assets/icons/headerIco/logo-amanita.svg';
import bgIcoProduct from '../../../../assets/Background/Image-products.png';


interface BasketForm {
    total: number,
    cart:  ICartItem[],
    setSubmitTg: TypeSetState<boolean>
}

export const BasketForm: FC<BasketForm> = ({total, cart, setSubmitTg}) => {

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

        <div className='basket-container'>


            <div className='basket'>
                <form className='basket-form'>

                    <div className='basket-form__icon'>
                        <AmanitaLogo/>
                    </div>

                    <p className='basket-form__title'>Введине ваши данные:</p>


                    <div className='basket-form__inputs'>
                        <div className='form-input'>
                            <input className='form-input__names'
                                   required
                                   type='text'
                                   value={nameInputHooks.value.replace(/[^a-zA-ZА-Яа-яЁё]/g, '')}
                                   onBlur={e => nameInputHooks.onBlur(e)}
                                   onChange={onChangeName}
                            />
                            <label>Имя</label>
                            <span></span>
                        </div>

                        <div className='form-input'>
                            <InputMask className='form-input__tel'
                                       type='tel'
                                       required
                                       mask="+375(99)999-99-99"
                                       disabled={false}
                                       value={telInputHooks.value}
                                       onBlur={(e: FocusEvent) => telInputHooks.onBlur(e)}
                                       onChange={onChangeNumber}
                            >
                            </InputMask>
                            <label>Номер телефона</label>
                            <span></span>
                        </div>
                    </div>


                    <p className='basket-form__subtitle'>*После оформления менеджер свяжется с вами для подверждения
                        заказа.</p>

                    <div className='basket-form__button'>
                        <button onClick={onSendData}
                                disabled={(!telInputHooks.inputValid || !nameInputHooks.inputValid)}
                                className={(!telInputHooks.inputValid || !nameInputHooks.inputValid) ? 'disabled' : ''}>
                            Оформить заказ
                        </button>
                    </div>

                </form>
                {window.innerWidth > 992 && <div className='basket-total'>
                    <div className='basket-total__count'>Общая сумма:<span> {Math.round(total)} BYN </span></div>
                </div>}
            </div>

            {window.innerWidth > 992 && <div className='image'>
                <img src={bgIcoProduct}/>
            </div>}

        </div>

    );
};
