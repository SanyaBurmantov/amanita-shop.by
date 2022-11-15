import React, {FC} from 'react';
import {TypeSetState} from "../../../../types";
import './StarRate.scss'

interface StarRate {
    setRate: TypeSetState<string>,
    setTestRate: TypeSetState<boolean>
}

export const StarRate: FC<StarRate> = ({setRate, setTestRate}) => {
    return (
        <div className='star-container'>
            <div className='star-widget'>
                <input value={5} type='radio' name='rate' id='rate-5' onClick={() => setTestRate(false)}
                       onChange={event => setRate("5")}/>
                <label htmlFor='rate-5'>★</label>
                <input value={4} type='radio' name='rate' id='rate-4' onClick={() => setTestRate(false)}
                       onChange={event => setRate("4")}/>
                <label htmlFor='rate-4'>★</label>
                <input value={3} type='radio' name='rate' id='rate-3' onClick={() => setTestRate(false)}
                       onChange={event => setRate("3")}/>
                <label htmlFor='rate-3'>★</label>
                <input value={2} type='radio' name='rate' id='rate-2' onClick={() => setTestRate(false)}
                       onChange={event => setRate("2")}/>
                <label htmlFor='rate-2'>★</label>
                <input value={1} type='radio' name='rate' id='rate-1' onClick={() => setTestRate(false)}
                       onChange={event => setRate("1")}/>
                <label htmlFor='rate-1'>★</label>
                <form className='star-widget-label'>
                    <header className='star-widget-label-text'></header>
                </form>
            </div>
        </div>
    );
};
