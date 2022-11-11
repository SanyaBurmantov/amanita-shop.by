import React, {useEffect} from "react";
import {useTelegram} from "../../hooks/useTelegram";


interface Props {
}
export const Telegram = (props: Props) => {
    useEffect(()=> {
        tg.ready();
    }, [])

   const {onToggleButton} = useTelegram()


    return (
        <div>
            Amanita-Shop.by

        <button onClick={onToggleButton}>toggle</button>
        </div>
    )
}


