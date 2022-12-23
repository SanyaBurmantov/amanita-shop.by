import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import Arrows from "../../../../assets/icons/Other/Slider-arrows.svg";

interface Counter {
    count: number,
    setCount: Dispatch<SetStateAction<number>>
}

export const Counter: FC<Counter> = ({count, setCount}) => {


    function quantityIncrement() {
        if (count >= 1) {
            setCount(count + 1)
        }
    }

    function quantityDecrement() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className='product-top-content-two_box-two-box'>
            <div className='product-top-content-two_box-two-box-left_arrow'
                 onClick={quantityDecrement}><img src={Arrows}/></div>
            <div className='product-top-content-two_box-two-box-number'>{count}</div>
            <div className='product-top-content-two_box-two-box-right_arrow'
                 onClick={quantityIncrement}><img src={Arrows}/></div>
        </div>
    );
};
