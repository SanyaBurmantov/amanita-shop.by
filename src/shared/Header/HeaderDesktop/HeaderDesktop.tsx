import {FC, lazy, Suspense, useEffect, useState} from 'react';
import {ReactComponent as AmanitaLogo} from '../../../assets/icons/headerIco/logo-amanita.svg'
import {Link} from "react-router-dom";
import {Pages} from "../../../data/Pages";
import {BasketIcoAndCount} from "../../UI/Basket/BasketIcoAndCount";
import './HeaderDesktop.scss'
import {useScroll} from "framer-motion";
import Modal from "../../UI/Modal/Modal";
import Preloader from "../../UI/Preloader/Preloader";
const Cart = lazy(() => import('../../UI/Cart/Card'));


interface HeaderDesktop {

}

export const HeaderDesktop: FC<HeaderDesktop> = () => {

    const [showBasket, setShowBasket] = useState(false)

    const {scrollY} = useScroll();


    useEffect(() => {
        return scrollY.onChange((latest) => {
            const header = document.getElementById('header');
            if (latest >= 100) {
                header!.classList.add('sticky');
            }
            if (latest <= 100 && header!.classList.contains('sticky')) {
                header!.classList.remove('sticky')
            }
            if (latest >= 150) {
                header!.classList.add('sticked');
            }
            if (latest <= 150 && header!.classList.contains('sticky')) {
                header!.classList.remove('sticked')
            }
        })
    }, [])

    return (

        <header id='header' className='header-desktop'>
            <div className="container">
                <div className='header-wrapper'>

                    <div className='header-desktop-logo'>
                        <Link to='/'>
                            <AmanitaLogo/>
                        </Link>
                    </div>

                    <nav className='header-desktop-menu'>

                        <ul>
                            {Pages.map(item =>
                                <li>
                                    <Link to={item.href}>{item.name}</Link>
                                </li>
                            )}
                        </ul>
                    </nav>

                    {(window.innerWidth > 992) && <>
                        <div className='header-desktop-button' onClick={() => setShowBasket(true)}>
                            <button className='header-desktop-button__btn'>Оформить заказ</button>
                        </div>
                        <Modal visible={showBasket} setVisible={setShowBasket}>
                            <Suspense fallback={<Preloader/>}>
                                {showBasket && <Cart/>}
                            </Suspense>
                        </Modal>
                    </>}

                    {(window.innerWidth <= 992) && <BasketIcoAndCount/>}

                </div>
                <hr/>
            </div>
        </header>
    );
};
