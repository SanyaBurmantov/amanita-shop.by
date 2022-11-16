import React, {useEffect, useState} from 'react';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные '
        })
    }, [])

    useEffect(()=> {
        if(!name || !number){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [])

    const onChangeName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(e.target.value)
    }

    const onChangeNumber = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setNumber(e.target.value)
    }


    return (
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
    );
};

export default Form;
