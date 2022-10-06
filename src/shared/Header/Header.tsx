import React from "react";
import styles from './Header.module.scss'
import logo from '../../assets/icons/logo-amanita.svg'
import {Link} from "react-router-dom";

interface Props {

}


export const Header = (props: Props) => {
    const items = [{
        name: 'Главная',
        href: '/'
    },{
        name: 'Блог',
        href: '/blog'
    },{
        name: 'Магазин',
        href: '/products'
    },{
        name: 'Доставка и оплата',
        href: '/payment-and-delivery'
    },{
        name: 'Отзывы',
        href: '/reviews'
    }];
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.container__info}>
                    <div className={styles.logo}>
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
            </div>
        </header>

    )
}


