import React from "react";
import {Contacts} from "../Contacts/Contacts";



interface Props {
}
export const Footer = (props: Props) => {

    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <Contacts />
                    <p className="footer__text">© Amanita Shop, 2022 </p>
                </div>
            </div>
        </footer>
    )
}
