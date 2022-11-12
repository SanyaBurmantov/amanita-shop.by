import React, {useEffect, useState} from "react";
// @ts-ignore
import logo from '../../assets/icons/logo-amanita.svg'
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


    const { scrollY, scrollYProgress } = useScroll()

    const [burger, setBurger] = useState(false)


    let hello = useEffect(() => {
        let jopa = 0

        return scrollY.onChange((latest) => {
            jopa = latest
            console.log(jopa)
        })
    }, [])





    return (
        <header>

            <motion.div className='header'>

                    <div className='header__logo'>
                        <div className="header__logo--picture">
                            <Link to="/">
                                <img src={logo} alt='logo-amanita'/>
                            </Link>
                        </div>
                    </div>

                    <div className="header__menu">
                        <div  className={`header__menu--burger ${ setBurger(prev => !prev)? 'active' : ''}`}>
                        <ul>
                            {items.map(item =>
                                <li key={item.name} className="header__menu--element">
                                    <Link to={item.href}>{item.name}</Link>
                                </li>
                            )}
                        </ul>
                      </div>

                        <div className="header__btn">
                            <button className="btn">Оформить заказ</button>
                        </div>
                    </div>

            </motion.div>

        </header>

    )
}


