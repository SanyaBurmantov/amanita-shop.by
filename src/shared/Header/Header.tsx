import React from "react";
import logo from '../../assets/icons/logo-amanita.svg'
import {Link} from "react-router-dom";
import {BLOG_ROUTE, HOME_ROUTE, PAYMENT_ROUTE, PRODUCTS_ROUTE, REVIEWS_ROUTE} from "../../utils/consts";

interface Props {

}

export const Header = (props: Props) => {
    const items = [{
        name: 'Главная',
        href: HOME_ROUTE
    }, {
        name: 'Блог',
        href: BLOG_ROUTE
    }, {
        name: 'Магазин',
        href: PRODUCTS_ROUTE
    }, {
        name: 'Доставка',
        href: PAYMENT_ROUTE
    }, {
        name: 'Отзывы',
        href: REVIEWS_ROUTE
    }];

    return (
        <header>
            <div className='container'>
                <div className='header'>
                    <div className='header__logo'>
                        <div className="header__logo--picture">
                            <Link to="/">
                                <img src={logo} alt='logo-amanita'/>
                            </Link>
                        </div>
                    </div>

                    <div className="header__menu">
                        <ul>
                            {items.map(item =>
                                <li className="header__menu--element">
                                    <Link to={item.href}>{item.name}</Link>
                                </li>
                            )}
                        </ul>

                        <div className="header__btn">
                            <button className="btn">Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}


