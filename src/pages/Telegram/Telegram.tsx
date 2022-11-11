import React, {useEffect} from "react";
import {useTelegram} from "../../hooks/useTelegram";
import {HeaderTelegram} from "../../shared/Header/HeaderTelegram";


interface Props {
}
export const Telegram = (props: Props) => {
    useEffect(()=> {
        tg.ready();
    }, [])

   const {onToggleButton} = useTelegram()


    return (
        <div>
            <HeaderTelegram />
            Amanita-Shop.by

            <button onClick={onToggleButton}>toggle</button>
        </div>
    )
}


