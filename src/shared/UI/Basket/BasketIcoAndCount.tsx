import {FC, useState, lazy, Suspense} from 'react';
import {ReactComponent as BasketIco} from '../../../assets/icons/Header/BasketIco.svg'
import './BasketIcoAndCount.scss';
import Modal from "../Modal/Modal";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import Preloader from "../Preloader/Preloader";
const Cart = lazy(() => import('../Cart/Cart'));


interface BasketIcoAndCount {

}

export const BasketIcoAndCount: FC<BasketIcoAndCount> = ({}) => {

    const [showBasket, setShowBasket] = useState(false)

    const cart = useTypedSelector(state => state.cart)

    return (
        <>
            <div className={window.innerWidth > 536 ? 'header-basket tablet' : 'header-basket'}
                 onClick={() => setShowBasket(true)}>
                <span>{cart.length}</span>
                <BasketIco/>
            </div>

            <Modal visible={showBasket} setVisible={setShowBasket}>
                <Suspense fallback={<div><Preloader/></div>}>
                    {showBasket && <Cart />}
                </Suspense>
            </Modal>
        </>
    );
};
