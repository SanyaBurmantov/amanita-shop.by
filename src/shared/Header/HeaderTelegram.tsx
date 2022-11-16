import React, {useEffect} from "react";
import {useTelegram} from "../../hooks/useTelegram";


interface Props {
}
export const HeaderTelegram = (props: Props) => {


    const {user, onClose} = useTelegram();


    return (
        <div className='telegram__header'>
            <div className='telegram__header--button'>
            <button className='btn-telegram' onClick={onClose}>Закрыть</button></div>
            <span className='telegram__username'>
                <div className="telegram__title"> Добро пожаловать, {user?.username} на сайт Amanita-shop.by</div>
                <div className="telegram__title">У нас вы можете приобрести мухоморы, ежовики и другое по самым выгодным ценам </div>

            </span>
        </div>
    )
}


