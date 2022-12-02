import {IProduct} from "../../../types";
import {FC} from "react";

interface IContactItem {
    contactPic: string
    info: string
    href: string
    name: string
}


export const ContactItem: FC<IContactItem> = (contact) => {
    return (
        <>
            <div className='contact'>
                <div className="contact__pic">{contact.contactPic}</div>
                <div className="contact__info">
                    <div className="contact__info--title">{contact.name}</div>
                    <div className="contact__info--text"><a href={contact.href}>{contact.info}</a></div>
                </div>
            </div>
        </>
    )
}