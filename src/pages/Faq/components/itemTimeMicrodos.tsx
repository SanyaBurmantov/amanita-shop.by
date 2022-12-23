import React, {FC, useState} from "react";
import {IFaqItem} from "../../../types";
// @ts-ignore
import remove from "../../../assets/icons/UI/remove-add.svg";
export const ItemTimeMicrodos: FC<IFaqItem> = (faqItem) => {


    let [faqVisible, setFaqVisible] = useState(true);

    return (
        <>
            <div className={`${faqVisible ? "faq__item" : "faq__item active"}`} onClick={() => (setFaqVisible(prev => !prev))}>
                <div className="faq__item--title">
                    <p><span>В</span> какое время принимать мухомор?</p>
                    <img src= {remove} />
                </div>
                <div className='faq__item--description'>
                    Принимать мухомор рекомендуется дважды в&nbsp;день&nbsp;&mdash; утром и&nbsp;вечером. Утренний прием даёт энергию жить и&nbsp;творить, хорошее настроение. Вечерний прием&nbsp;&mdash; быстрое засыпание, крепкий сон и&nbsp;лёгкое пробуждение. Однако, все мы&nbsp;индивидуальны, и&nbsp;вечерний прием в&nbsp;редких случаях не&nbsp;подходит. Если вместо крепкого сна, вы&nbsp;наоборот не&nbsp;можете уснуть, то&nbsp;спокойно отменяйте вечерний прием. Его можно перенести на&nbsp;дневное время или даже выпить двойную дозировку утром. Или просто отменить. Смотрите по&nbsp;отклику своего тела, оно всегда на&nbsp;связи и&nbsp;постоянно посылает сигналы о&nbsp;том, чего хочет.

                </div>
            </div>
        </>
    )
}