import React, {FC} from 'react';
import {TypeSetState} from "../../../../types";

interface StarRate{
    setRate: TypeSetState<string>
}

export const StarRate: FC<StarRate> = ({setRate}) => {
    return (
        <div className='reviews-modal-forms-form-rate'>
            <label><input value={1} type='radio' name='rate' id='rate-5' onChange={event => setRate("1")}/></label>
            <label><input value={2} type='radio' name='rate' id='rate-5' onChange={event => setRate("2")}/></label>
            <label><input value={3} type='radio' name='rate' id='rate-5' onChange={event => setRate("3")}/></label>
            <label><input value={4} type='radio' name='rate' id='rate-5' onChange={event => setRate("4")}/></label>
            <label><input value={5} type='radio' name='rate' id='rate-5' onChange={event => setRate("5")}/></label>
        </div>
    );
};
