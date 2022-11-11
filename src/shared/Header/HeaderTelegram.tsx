import React, {useEffect} from "react";
import {useTelegram} from "../../hooks/useTelegram";


interface Props {
}
export const HeaderTelegram = (props: Props) => {


    const {user, onClose} = useTelegram();


    return (
        <div>
            <button onClick={onClose}></button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}


