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
                <div> Добро пожаловать, {user?.username} на сайт Amanita-shop.by</div>
                <div className="hello">У нас вы можете приобрести мухоморы, ежовики и другое по самым выгодным ценам </div>

            </span>
        </div>
    )
}


