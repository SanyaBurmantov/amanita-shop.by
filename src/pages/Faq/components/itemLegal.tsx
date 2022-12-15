import React, {FC, useState} from "react";
import {IFaqItem} from "../../../types";
// @ts-ignore
import remove from "../../../assets/icons/remove-add.svg";
export const ItemLegal : FC<IFaqItem> = (faqItem) => {


    let [faqVisible, setFaqVisible] = useState(true);

    return (
        <>
            <div className={`${faqVisible ? "faq__item" : "faq__item active"}`} onClick={() => (setFaqVisible(prev => !prev))}>
                <div className="faq__item--title">
                    <p><span>Л</span>егален ли мухомор?</p>
                    <img src= {remove} />
                </div>
                <div className='faq__item--description'>
                    Мухомор является абсолютно легальным грибом разрешенным к&nbsp;сбору, применению и&nbsp;пересылке на&nbsp;территории&nbsp;РФ и&nbsp;РБ. Он&nbsp;не&nbsp;содержит никаких запрещенных действующих веществ, поэтому тесты ГАИ его не&nbsp;ищут и&nbsp;ничего не&nbsp;показывают. Мы&nbsp;отправляем посылки с&nbsp;Мухомором по&nbsp;России и&nbsp;Беларуси от&nbsp;своего имени и&nbsp;никогда не&nbsp;сталкивались с&nbsp;проблемами или вопросами по&nbsp;этому поводу.

                </div>
            </div>
        </>
    )
}