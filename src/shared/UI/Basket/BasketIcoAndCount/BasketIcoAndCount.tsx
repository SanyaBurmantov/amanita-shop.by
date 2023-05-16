import {FC, useState} from 'react';
import {ReactComponent as BasketIco} from '../../../../assets/icons/Header/BasketIco.svg'
import './BasketIcoAndCount.scss';
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import Modal from "../../Modal/Modal";
import Basket from "../Basket";


interface BasketIcoAndCount {

}

export const BasketIcoAndCount: FC<BasketIcoAndCount> = ({}) => {

    const [opened, setOpened] = useState(false);

    const cart = useTypedSelector(state => state.cart)

    return (
        <>
            <div className={window.innerWidth > 587 ? 'header-basket tablet' : 'header-basket'}
                 onClick={() => setOpened(true)}>
                    <div><span>{cart.length}</span></div>
                <BasketIco/>
            </div>



            <Modal opened={opened} onClose={()=> setOpened(false)} setOpened={setOpened}>
                <Basket/>
            </Modal>

        </>
    );
};
