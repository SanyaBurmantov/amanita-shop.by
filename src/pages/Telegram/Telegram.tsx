import React, {useEffect} from "react";
import {useTelegram} from "../../hooks/useTelegram";
import {HeaderTelegram} from "../../shared/Header/HeaderTelegram";
import Products from "../Products/components/Products";


interface Props {
}
export const Telegram = (props: Props) => {

   const {onToggleButton, tg} = useTelegram()

    useEffect(()=> {
        tg.ready();
    }, [])



    return (
        <div>
            <HeaderTelegram />
            Amanita-Shop.by
            
            <button onClick={onToggleButton}>toggle</button>

        </div>
    )
}


