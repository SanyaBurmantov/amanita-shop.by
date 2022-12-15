import React, {FC, useState} from "react";
import {IFaqItem} from "../../../types";
// @ts-ignore
import remove from "../../../assets/icons/remove-add.svg";

export const ItemMicrodosing: FC<IFaqItem> = (faqItem) => {


    let [faqVisible, setFaqVisible] = useState(true);

    return (
        <>
            <div className={`${faqVisible ? "faq__item" : "faq__item active"}`}
                 onClick={() => (setFaqVisible(prev => !prev))}>
                <div className="faq__item--title">
                    <p><span>Ч</span>то такое мухоморный микродозинг?</p>
                    <img src={remove}/>
                </div>
                <div className='faq__item--description'>
                    <p><span><b>Микродозинг мухоморов</b></span>&nbsp;&mdash; это употребление сушеных грибов
                        в&nbsp;сверхмалой, буквально в
                        <u>микроскопической</u> дозировке.

                        Для многих, эффективное количество равно <span>0,7</span>&nbsp;&mdash; <span>1,5</span>&nbsp;гр
                        за&nbsp;<u>сутки</u>. Это количество
                        может быть принято однократно утром. Второй вариант, это разбивать
                        на&nbsp;2&nbsp;раза&nbsp;&mdash; <b>утром</b> и&nbsp;<b>вечером</b>. Изначально стоит начать с&nbsp;малого
                        количество в&nbsp;<span>0,3&nbsp;</span>гр.

                        Курс микродозинга составляет <b>1-3</b> месяца и&nbsp;проходить его можно <b>1-2</b> раза в&nbsp;год (все
                        очень
                        индивидуально и&nbsp;понять свою длину курса нужно самостоятельно, внимательно прислушиваясь
                        с&nbsp;себе и&nbsp;своему телу). Принимать МКМ постоянно нет необходимости, так как
                        положительный
                        терапевтический эффект сохраняется и&nbsp;после прекращения курса. Исключение могут быть
                        в&nbsp;случае применения МКМ для борьбы с&nbsp;<span><b>сильными зависимостями</b></span>.</p>
                </div>
            </div>
        </>
    )
}