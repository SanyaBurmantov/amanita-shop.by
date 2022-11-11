import React, {useEffect} from "react";


interface Props {
}
export const HeaderTelegram = (props: Props) => {
// @ts-ignore
    const tg = window.Telegram.WebApp

    const onClose = () => {
        tg.close()
    }


    return (
        <div>
            Amanita-Shop.by
            <button onClick={onClose}></button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user.username}
            </span>
        </div>
    )
}


