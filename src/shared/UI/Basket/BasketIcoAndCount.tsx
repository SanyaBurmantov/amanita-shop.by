import {FC, useState} from 'react';
import {ReactComponent as BasketIco} from '../../../assets/icons/Header/BasketIco.svg'
import {Modal} from "../Modal/Modal";
import {Cart} from "../Cart/Cart";
import './BasketIcoAndCount.scss';

interface BasketIcoAndCount {

}

export const BasketIcoAndCount: FC<BasketIcoAndCount> = ({}) => {

    const [countBasket, setCountBasket] = useState(0)

    const [showBasket, setShowBasket] = useState(false)

    const updateBasketCount = (count: number) => {
        setCountBasket(count)
    }

    return (
        <>
            <div className={window.innerWidth > 536 ? 'header-basket tablet' : 'header-basket'}
                 onClick={() => setShowBasket(true)}>
                <span>{countBasket}</span>
                <BasketIco/>
            </div>
            <Modal visible={showBasket} setVisible={setShowBasket}>
                <Cart updateBasketCount={updateBasketCount}/>
            </Modal>
        </>

    );
};
