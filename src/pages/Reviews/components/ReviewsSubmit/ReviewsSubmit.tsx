import React, {FC} from 'react';
import {FunctionHandler, TypeSetState} from "../../../../types";

interface ReviewsSubmit {
    testEmail: boolean,
    errorEmail: string,
    email: string,
    blurHandler: FunctionHandler,
    emailHandler: FunctionHandler,
    emailtest: RegExp,
    setEditForm: React.Dispatch<React.SetStateAction<boolean>>
}

export const ReviewsSubmit: FC<ReviewsSubmit> = ({
                                                     testEmail,
                                                     errorEmail,
                                                     email,
                                                     emailHandler,
                                                     blurHandler,
                                                     emailtest,
                                                     setEditForm
                                                 }) => {


    const CanEditForm = () => {
        if (emailtest.test(String(email).toLowerCase())) {
            setEditForm(true)
        } else {
            alert('Введите корректный email')
        }
    }


    return (
        <div className='form-submit'>
            <div className='form-submit-text'>Спасибо за оставленный отзыв!</div>
            <div className='form-submit-subtext'>Бро, каждый пользователь может оставить только 1 отзыв. Если
                хочешь изменить свой отзыв введи свой емейл и жмякай кнопку ниже!
            </div>
            {(testEmail && errorEmail) && <div style={{color: 'red'}}>{errorEmail}</div>}
            <input name='email' className='reviews-modal-forms-form-email' type='text' value={email}
                   placeholder='Введите email...'
                   onBlur={event => blurHandler(event)} onChange={event => emailHandler(event)}/>
            <div className='form-submit-button'>
                <button
                    className={emailtest.test(String(email).toLowerCase()) ? 'form-submit-button-edit disabled' : 'form-submit-button-edit'}
                    onClick={CanEditForm}>Изменить
                </button>
            </div>
        </div>
    );
};