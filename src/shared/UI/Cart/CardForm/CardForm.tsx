import {FC, SetStateAction, useState} from 'react';
import {useInput} from "../../../../hooks/useInput";
import './CardForm.scss'
import InputMask from "react-input-mask";

interface CardForm {

}

export const CardForm: FC = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    const nameInputHooks = useInput('', {isEmpty: true, minLength: 2})
    const telInputHooks = useInput('', {testPhone: true})


    const onChangeName = (e: { target: { value: SetStateAction<string>; }; }) => {
        setName(e.target.value)
        nameInputHooks.onChange(e)
        console.log(e.target.value)
    }
    const onChangeNumber = (e: { target: { value: SetStateAction<string>; }; }) => {
        setNumber(e.target.value)
        telInputHooks.onChange(e)
    }


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
                <button disabled={(!telInputHooks.inputValid || !nameInputHooks.inputValid)}
                        className={(!telInputHooks.inputValid || !nameInputHooks.inputValid) ? 'disabled' : ''}>
                    Оформить заказ
                </button>
            </div>
        </form>
    );
};
