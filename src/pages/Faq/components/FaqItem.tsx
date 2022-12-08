import {FC, useState} from "react";
import {IFaqItem} from "../../../types";
export const FaqItem: FC<IFaqItem> = (faqItem) => {


    let [faqVisible, setFaqVisible] = useState(false);

    return (
        <>
            <div className="faq__item">
                <div className="faq__item--title" onClick={() => (setFaqVisible(prev => !prev))}>
                   <p>{faqItem.title}</p>
                </div>
                <div className={`${faqVisible ? "faq__item--description" : "faq__item--description active"}`}>{faqItem.description}</div>
            </div>
        </>
    )
}