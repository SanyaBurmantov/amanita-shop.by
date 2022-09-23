import React from "react";
import styles from './Header.module.scss'
import logo from '../../assets/icons/logo-amanita.svg'

interface Props {}

export interface Item {
    name: string
    href: string
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
                    <img src={logo} alt='logo-amanita' />
                </div>
                <ul>
                    {items.map(item =>
                        <li>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles.container__button}>
                <div className={styles.contactButton}>
                    <a href="#" className={styles.contactBtn}>Контакты</a>
                </div>
                <div className={styles.basketButton}>
                    <a href="#" className={styles.basketBtn}>Корзина</a>
                </div>
            </div>
            </div>
        </header>

    )
}


