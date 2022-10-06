import React, {FC, useState} from 'react';
import {TypeSetState} from "../../../types";

interface IQuantity{
    count: number
    setCount: TypeSetState<number>
}

const Quantity:FC<IQuantity> = ({count, setCount}) => {



    return (
        <div>
            <button onClick={()=> count > 0 && setCount(prev => prev - 1) }>-</button>
            <input type="number" onChange={e => setCount(+e.target.value)} value={count} />
            <button onClick={()=> setCount(prev => prev + 1) }>+</button>
        </div>
    );
};

export default Quantity
