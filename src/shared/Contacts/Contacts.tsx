import React, {FC} from "react";
import {HOME_ROUTE, PAYMENT_ROUTE, PRODUCTS_ROUTE} from "../../utils/consts";
import {IProduct} from "../../types";
import ProductItem from "../../pages/Products/components/ProductsItem/ProductItem";
import {ContactItem} from "./Components/ContactItem";


interface Contacts{

}
export const Contacts: FC<Contacts> = () => {
    const contacts = [{
        contactPic: '',
        name: 'Телефон',
        info: '+375(29)348-76-75',
        href: 'tel:+375293487675'
    }, {
        contactPic: '',
        name: 'Telegram',
        info: '@Muhomormnsk',
        href: 'https://t.me/Muhomormnsk'
    }, {
        contactPic: '',
        name: 'Viber',
        info: '+375(29)348-76-75',
        href: 'https://viber://chat?number=%2B375293487675'
    }, {
        contactPic: '',
        name: 'WhatsApp',
        info: '+375(29)348-76-75',
        href: 'https://wa.me/%2B375293487675?text=Здравствуйте%20мне%20нужно%20консультация%20по%20микродозингу'
    }, {
        contactPic: '',
        name: 'Группа в телеграм',
        info: 'Amanita-shop.by',
        href: 'https://t.me/+Zzxs5d5oyjZiNmIy'
    },]
    return (
        <>
            <div className='contacts'>{contacts.map(contact =>
                <ContactItem key={contact.name} name={contact.name} contactPic={contact.contactPic} info={contact.info} href={contact.href}  />)}</div>
        </>
    )
}