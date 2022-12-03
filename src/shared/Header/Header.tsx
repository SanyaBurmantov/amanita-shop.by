import React, {FC, useEffect, useRef, useState} from "react";
// @ts-ignore
import logo from '../../assets/icons/logo-amanita.svg'
import {motion, useScroll} from "framer-motion"
import {Link} from "react-router-dom";
import {BLOG_ROUTE, HOME_ROUTE, PAYMENT_ROUTE, PRODUCTS_ROUTE, REVIEWS_ROUTE} from "../../utils/consts";
import {useModalOpen} from "../../hooks/useModalOpen";
import {Cart} from "../Cart/Cart";


interface Header {

}

export const Header: FC<Header> = () => {

    const items = [{
        name: 'Главная',
        href: HOME_ROUTE
    }, {
        name: 'Магазин',
        href: PRODUCTS_ROUTE
    }, {
        name: 'Доставка',
        href: PAYMENT_ROUTE
    },
        // {
    //     name: 'Блог',
    //     href: BLOG_ROUTE
    // }, {
    //     name: 'Доставка',
    //     href: PAYMENT_ROUTE
    // }, {
    //     name: 'Отзывы',
    //     href: REVIEWS_ROUTE
    // }
    ];

    let [activeState, setActiveState] = useState(false);

    let { doOpen } = useModalOpen(false)


    const { scrollY } = useScroll();




    useEffect(() => {
        return scrollY.onChange((latest) => {
            const header = document.getElementById('header');
            if(latest>=500){
                header!.classList.add('sticky');
            }
            if(latest<=500 && header!.classList.contains('sticky')){
                header!.classList.remove('sticky')
            }
            if(latest>=625){
                header!.classList.add('sticked');
            }
            if(latest<=625 && header!.classList.contains('sticky')){
                header!.classList.remove('sticked')
            }
        })
    }, [])

    return (
        <header id='header' className=''>

            <div className="header">
            <div className="header-menu-logo">
                <Link to="/">
                    <img className='header-menu-logo-img' src={logo} alt='logo-amanita'/>
                </Link>
            </div>
            <div className='header-menu'>
                <div className="header-menu-menu">
                    <div onClick={() => (doOpen() , (setActiveState(prev => !prev)))}>
                        <div className={`header-menu-menu-burger ${activeState ? 'active' : ''}`}>
                            <span></span>
                        </div>
                    </div>
                    <ul className={`${activeState ? 'active' : ''}`}>
                        <div className='header-menu-title'>Меню</div>

                        {items.map(item =>
                            <Link to={item.href} key={item.name}
                                  onClick={() => (doOpen(), (setActiveState(prev => !prev)))}
                                  className="header-menu-menu-element">
                                <div className='header-menu-menu-element-title'>
                                    <div className='header-menu-menu-element-title-marker'></div>
                                    <div className='header-menu-menu-element-title-name'>{item.name}</div>
                                </div>
                                <div className='header-menu-menu-element-arrow'></div>
                            </Link>
                        )}
                    </ul>
                    <div className={`header-blur ${activeState ? 'active' : ''}`}
                         onClick={() => (doOpen(), (setActiveState(prev => !prev)))}></div>

                </div>
            </div>
            <div className="header-button"> <div className="header_cart"><Cart /></div>
                <button className="header-button-btn">Оформить заказ</button>
            </div>
            </div>
            <hr />
        </header>
    )
}


