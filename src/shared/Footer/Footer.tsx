import React from "react";
import styles from './Footer.module.scss'
import {Link} from "react-router-dom";


interface Props {
}
export const Footer = (props: Props) => {

    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <p className="footer__text">© Amanita Shop, 2022 </p>
                </div>
            </div>
        </footer>
    )
}
