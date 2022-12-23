import React, {FC, useState} from "react";
import {IFaqItem} from "../../../types";
// @ts-ignore
import remove from "../../../assets/icons/UI/remove-add.svg";
export const ItemPiels: FC<IFaqItem> = (faqItem) => {


    let [faqVisible, setFaqVisible] = useState(true);

    return (
        <>
            <div className={`${faqVisible ? "faq__item" : "faq__item active"}`} onClick={() => (setFaqVisible(prev => !prev))}>
                <div className="faq__item--title">
                    <p><span>И</span>з чего состоят капсулы?</p>
                    <img src= {remove} />
                </div>
                <div className='faq__item--description'>
                    Мы&nbsp;принимаем все меры для того того чтобы продукт соответствовал высшему качеству... А&nbsp;именно:

                    1. Шаманка в&nbsp;порошке и&nbsp;капсулах перемалываются только перед изготовлением и&nbsp;отправкой

                    2&nbsp;Шляпки храним только в&nbsp;вакууме в&nbsp;темном месте

                    3&nbsp;На шаманку идут только закрытые, самые мощные по&nbsp;действию шляпки

                    4&nbsp;Капсулы с&nbsp;2021 года используем только веганские, из&nbsp;древесной целлюлозы (ибо гриб не&nbsp;любит мясо, а&nbsp;обычные желатиновые делают из&nbsp;костей)

                    5&nbsp;От сбора в&nbsp;лесу до&nbsp;фасовки продукции все манипуляции с&nbsp;грибом производятся в&nbsp;перчатках и&nbsp;лица со&nbsp;стабильной ровной психикой

                    6&nbsp;Мягкая сушка в&nbsp;инфракрасных низкотемпературных сушилках до&nbsp;37&deg;&nbsp;в течении 2х&nbsp;суток

                </div>
            </div>
        </>
    )
}