import React, {useEffect, useState} from "react";
// @ts-ignore
import logo from '../../assets/icons/logo-amanita.svg'
// @ts-ignore
import logoMob from '../../assets/icons/logo-amanita-mobile.png'
import { motion, useScroll } from "framer-motion"
import {Link} from "react-router-dom";
import {BLOG_ROUTE, HOME_ROUTE, PAYMENT_ROUTE, PRODUCTS_ROUTE, REVIEWS_ROUTE} from "../../utils/consts";
import {products} from "../../data/Products";


interface Props {

}

export const Header = (props: Props) => {
    const items = [{
        name: 'Главная',
        href: HOME_ROUTE
    }, {
        name: 'Магазин',
        href: PRODUCTS_ROUTE
    }, {
        name: 'Блог',
        href: BLOG_ROUTE
    }, {
        name: 'Доставка',
        href: PAYMENT_ROUTE
    }, {
        name: 'Отзывы',
        href: REVIEWS_ROUTE
    }];

    let [activeState, setActiveState] = useState(false);

    return (
        <header>

            <motion.div className='header'>

                <div className='header__logo'>
                    <div className="header__logo--picture">
                        <Link to="/">
                            <img src={logo} alt='logo-amanita'/>
                        </Link>
                    </div>
                    <div className="header__logo--mobile">
                        <Link to="/">
                            <img src={logoMob} alt='logo-amanita'/>
                        </Link>
                    </div>

                </div>

                <div className="header__menu">
                    <div onClick={() => (setActiveState(prev => !prev))}>
                        <div className={`header__burger ${activeState ? 'active' : ''}`}>
                            <span></span>
                        </div>
                    </div>
                    <ul className={`${activeState ? 'active' : ''}`}>
                        {items.map(item =>
                            <li key={item.name} onClick={() => (setActiveState(prev => !prev))} className="header__menu--element">
                                <Link to={item.href}>{item.name}</Link>
                            </li>
                        )}
                    </ul>
                    <div className={`header__blur ${activeState ? 'active' : ''}`}
                         onClick={() => (setActiveState(prev => !prev))}></div>

                    <div className="header__btn">
                        <button className="btn">Оформить заказ</button>
                    </div>
                </div>

            </motion.div>
        </header>

    )
}


