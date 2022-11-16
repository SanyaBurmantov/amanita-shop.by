import React, {useCallback, useEffect, useState} from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import {Telegram} from "../../pages/Telegram/Telegram";

const Form = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    //ts-ignore
    const {tg} = useTelegram();
    //ts-ignore
    const onSendData = useCallback(() => {
        const data = {
            name,
            number,
        }
        tg.sendData(JSON.stringify(data));
    }, [name, number])
    //ts-ignore
    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    //ts-ignore
    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные '
        })
    }, [])

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
