import React, {useEffect} from "react";
// @ts-ignore
const tg = window.Telegram.WebApp

interface Props {
}
export const Telegram = (props: Props) => {
    useEffect(()=> {
        tg.ready();
    }, [])

    const onClose = () => {
        tg.close()
    }


    return (
        <div>
            Amanita-Shop.by
            <button onClick={onClose}></button>
        </div>
    )
}


