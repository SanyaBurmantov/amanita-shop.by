import React from "react";
import logo from '../../assets/icons/logo-amanita.svg'
import {Link} from "react-router-dom";
import './Header.scss'
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
        name: 'Доставка и оплата',
        href: PAYMENT_ROUTE
    }, {
        name: 'Отзывы',
        href: REVIEWS_ROUTE
    }];
    return (
        <header className='header'>
            <div className='container'>
                <div className='container__info'>
                    <div className='logo'>
                        <Link to="/">
                            <img src={logo} alt='logo-amanita'/>
                        </Link>
                    </div>
                    <ul>
                        {items.map(item =>
                            <li>
                                <Link to={item.href}>{item.name}</Link>
                            </li>
                        )}
                    </ul>
                </div>

                <div className='container__button'>
                    <div className='contactButton'>
                        <Link to="#" className='contactBtn'>Контакты</Link>
                    </div>
                    <div className='basketButton'>
                        <Link to="#" className='basketBtn'>Корзина</Link>
                    </div>
                </div>

            </div>
        </header>

    )
}


