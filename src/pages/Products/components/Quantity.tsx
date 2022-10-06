import React, {FC, useState} from 'react';
import {TypeSetState} from "../../../types";

interface IQuantity{
    count: number
    setCount: TypeSetState<number>
}

const Quantity:FC<IQuantity> = ({count, setCount}) => {



    return (
        <div className="quantity">
            <button className="quantity__minus" onClick={()=> count > 0 && setCount(prev => prev - 1) }>-</button>
            <input className="quantity__field" type="number" onChange={e => setCount(+e.target.value)} value={count} />
            <button className="quantity__plus" onClick={()=> setCount(prev => prev + 1) }>+</button>
        </div>
    );
};

export default Quantity
