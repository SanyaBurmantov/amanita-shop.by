import React, {useEffect} from "react";
import {useTelegram} from "../../hooks/useTelegram";
import {HeaderTelegram} from "../../shared/Header/HeaderTelegram";
import Form from "../../shared/Cart/Form";
// @ts-ignore



interface Props {
}
export const Telegram = (props: Props) => {

   const {onToggleButton, tg} = useTelegram()

    useEffect(()=> {
        tg.ready();
    }, [])



    return (
        <div className="telegram">
            <div className="container">

            <HeaderTelegram />
                <Form />
            Amanita-Shop.by
                Некоторые функции сайта работают в тестовом режиме, приносим извинения за временные неудобства.
            <button onClick={onToggleButton}>Fsdf</button>
            </div>
        </div>
    )
}


