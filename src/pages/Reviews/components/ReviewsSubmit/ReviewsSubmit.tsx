import React, {FC} from 'react';

interface ReviewsSubmit {

}

export const ReviewsSubmit: FC<ReviewsSubmit> = ({}) => {


    return (
        <div className='form-submit'>
            <div className='form-submit-text'>Спасибо за оставленный отзыв!</div>
            <div className='form-submit-subtext'>Бро, каждый пользователь может оставить только 1 отзыв. Если
                хочешь изменить свой отзыв то поздно блять!
            </div>
        </div>
    );
};
