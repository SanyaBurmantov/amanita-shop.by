import React, {FC, useState} from "react";
import {IFaqItem} from "../../../types";
// @ts-ignore
import remove from "../../../assets/icons/UI/remove-add.svg";
export const ItemHowLong: FC<IFaqItem> = (faqItem) => {


    let [faqVisible, setFaqVisible] = useState(true);

    return (
        <>
            <div className={`${faqVisible ? "faq__item" : "faq__item active"}`} onClick={() => (setFaqVisible(prev => !prev))}>
                <div className="faq__item--title">
                    <p><span>С</span>колько длится курс микродозинга?</p>
                    <img src= {remove} />
                </div>
                <div className='faq__item--description'>
                    Курс можно проводить без перерывов, а&nbsp;можно отдыхать раз в&nbsp;неделю. Оптимальным считается курс микродозинга длительностью 1&nbsp;&mdash; 3&nbsp;месяца. После это берут перерыв, длительностью 1&nbsp;месяц и&nbsp;по&nbsp;необходимости делать повторный.

                    Гриб Имеет накопительный эффект, поэтому важно принимать курсом. Будьте внимательны, что на&nbsp;некоторых действует не&nbsp;с&nbsp;первого раза, а&nbsp;только через несколько дней приема

                </div>
            </div>
        </>
    )
}