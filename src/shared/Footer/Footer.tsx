import React from "react";
import styles from './Footer.module.scss'
import {Link} from "react-router-dom";


interface Props {
}
export const Footer = (props: Props) => {
    const nav = [{
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
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.blockOne}>
                    <div className={styles.navi}>
                        <ul>
                            {nav.map(item =>
                                <li>
                                    <Link to={item.href}>{item.name}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={styles.content_text}>
                        <p className={styles.tel}>375 29 348 76 76</p>
                        <div className={styles.textsOne}>Для звонков по Беларуси</div>
                        <p className={styles.textsTwo}>Республика Беларусь, Минск</p>
                        <p className={styles.textsTree}>© 2022 Amanita Shop | Микродозинг | Беларусь </p>
                    </div>
                </div>
                <div className={styles.blockTwo}>
                    <div className={styles.text}>Для связи в мессенджерах:</div>
                    <div className={styles.mess1}>телега</div>
                    <div className={styles.mess2}>инста</div>
                </div>
            </div>
        </footer>
    )
}
