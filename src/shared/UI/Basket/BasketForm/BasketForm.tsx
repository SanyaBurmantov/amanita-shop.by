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
        const usersTelegram = {
            chatIdMark: "424119633",
            chatIdSanya: "408745156",
            chatIdKarina: "2024969663",
            chatIdNikita: "2024969663",
        };
        const data = {
            name,
            number,
            products: cart,
            totalPrice: total,
            queryId,
        };

        let strMatrix = "";
        let posValue = data.products.length;

        let strPr = data.products.map(el => {
            strMatrix += "%0A %09" + el.name.toString();
            strMatrix += "%0A %09" + el.type.toString();
            if (el.productDescription.title){
                strMatrix += "%0A %09 " + el.productDescription.title + el.countFormOne.toString();
            }
            if (el.productDescription.subtitle){
                strMatrix += "%0A %09 " + el.productDescription.subtitle + el.countFormTwo.toString();
            }
            strMatrix += "%0A %09" + "Количество единиц товара: " + el.count.toString();
            strMatrix += "%0A %09Цена " + el.finalPrice.toString() + "BYN%0A";
        })

        let message = `Клиент: ${data.name}%0AНомер телефона ${data.number}%0AЧисло товаров: ${posValue}%0AТовары: ${strMatrix}%0AИтоговая цена: ${data.totalPrice.toString()}BYN`;

        const urls = [
            `https://api.telegram.org/bot${token}/sendMessage?chat_id=${usersTelegram.chatIdSanya}&text=${message}&parse_mode=html`,
            `https://api.telegram.org/bot${token}/sendMessage?chat_id=${usersTelegram.chatIdMark}&text=${message}&parse_mode=html`,
            `https://api.telegram.org/bot${token}/sendMessage?chat_id=${usersTelegram.chatIdKarina}&text=${message}&parse_mode=html`,
            `https://api.telegram.org/bot${token}/sendMessage?chat_id=${usersTelegram.chatIdNikita}&text=${message}&parse_mode=html`
        ];

        urls.forEach(url => {
            let api = new XMLHttpRequest();
            api.open("GET", url, true);
            api.send();
        });

        dispatch(removeCartAll());
        setSubmitTg(true);
        setTimeout(() => setSubmitTg(false), 10000);

    }, [name, number, cart, total, queryId]);


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
