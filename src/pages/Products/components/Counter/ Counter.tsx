import {FC} from 'react';
import IcoPlus from '../../../../assets/Shared/PlusIcoCircle.svg'
import IcoMinus from '../../../../assets/Shared/MinusIcoCircle.svg'
import {TypeSetState} from "../../../../types";
import {LazyLoadImage} from "react-lazy-load-image-component";

interface Counter {
    count: number,
    setCount: TypeSetState<number>
}

export const Counter: FC<Counter> = ({count, setCount}) => {


    function countIncrement() {
        if (count >= 1) {
            setCount(count + 1)
        }
    }

    function countDecrement() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className='product-form-three'>
            <p className='product-form-three__title'>Количество:</p>
            <div className='count-wrapper'>
                <LazyLoadImage src={IcoMinus} alt='ico_minus' onClick={countDecrement}/>
                <p className='count-wrapper__number'>{count}</p>
                <LazyLoadImage src={IcoPlus} alt='ico_plus' onClick={countIncrement}/>
            </div>
        </div>
    );
};
