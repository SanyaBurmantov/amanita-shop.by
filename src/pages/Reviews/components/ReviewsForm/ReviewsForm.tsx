import React, {FC, useState} from 'react';
import UserAvatar from "../../../../assets/icons/UserAvatar.svg";
import {StarRate} from "../StarRate/StarRate";
import './ReviewsForm.scss'
import {FunctionHandler, IRewiews, TypeSetState} from "../../../../types";


interface ReviewsForm {
    review: IRewiews[],
    setReviews: TypeSetState<IRewiews[]>,
    emailtest: RegExp,
    userName: string,
    setUserName: React.Dispatch<React.SetStateAction<string>>,
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
    rate: string,
    setRate: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    testUserName: boolean,
    setTestUserName: React.Dispatch<React.SetStateAction<boolean>>,
    testEmail: boolean,
    setTestEmail: React.Dispatch<React.SetStateAction<boolean>>,
    testText: boolean,
    setTestText: React.Dispatch<React.SetStateAction<boolean>>,
    testRate: boolean,
    setTestRate: React.Dispatch<React.SetStateAction<boolean>>,
    errorEmail: string,
    setErrorEmail: React.Dispatch<React.SetStateAction<string>>,
    errorUserName: string,
    setErrorUserName: React.Dispatch<React.SetStateAction<string>>,
    errorText: string,
    setErrorText: React.Dispatch<React.SetStateAction<string>>,
    errorRate: string,
    setErrorRate: React.Dispatch<React.SetStateAction<string>>,
    blurHandler: FunctionHandler,
    emailHandler: FunctionHandler,
    textHandler: FunctionHandler,
    userNameHandler: FunctionHandler,
    setSubmitForm: React.Dispatch<React.SetStateAction<boolean>>,
}

export const ReviewsForm: FC<ReviewsForm> = ({
                                                 setReviews,
                                                 review,
                                                 emailtest,
                                                 userName,
                                                 setUserName,
                                                 text,
                                                 setText,
                                                 setRate,
                                                 rate,
                                                 email,
                                                 setEmail,
                                                 testEmail,
                                                 testText,
                                                 setTestText,
                                                 setTestRate,
                                                 setTestEmail,
                                                 setTestUserName,
                                                 testUserName,
                                                 testRate,
                                                 errorEmail,
                                                 setErrorEmail,
                                                 setErrorRate,
                                                 errorUserName,
                                                 errorText,
                                                 setErrorText,
                                                 setErrorUserName,
                                                 errorRate,
                                                 blurHandler,
                                                 userNameHandler,
                                                 emailHandler,
                                                 textHandler,
                                                 setSubmitForm
                                             }) => {

    const addNewReviews = (e: any) => {
        e.preventDefault()
        if (text.length >= 4 && userName.length != 0 && rate.length != 0 && emailtest.test(String(email).toLowerCase())) {
            const newReviews = {
                id: Date.now(),
                userName,
                rate,
                userImage: 'https://sun9-87.userapi.com/impg/z3c-4hgHqhsMh-5UQOrKa873TS9fAoKgnSzDnw/kn14aZIkPzs.jpg?size=539x666&quality=96&sign=4935b0f99a85f97997942247a778c82f&type=album',
                text,
                Data: new Date().toLocaleDateString(),
                email,
            }
            setReviews([newReviews, ...review])
            setUserName('')
            setText('')
            setRate('')
            setSubmitForm(true)
            setEmail('')
            // Имага временно по дефолту
            // SetUserImage('')
        } else {
            alert('Заполните необходимые поля')
            if (userName.length === 0) {
                setTestUserName(true)
                setErrorUserName('Поле не должно быть пустым')
            }
            if (text.length < 5) {
                setTestText(true)
                setErrorText('Поле должно содержать 5 или более символов')
            }
            if (rate.length === 0) {
                setTestRate(true)
                setErrorRate('Выберите отметку')
            }
            if (!emailtest.test(String(email).toLowerCase())) {
                setTestEmail(true)
                setErrorEmail('Введите корректный email')
            }
        }
    }

    return (
        <form className='reviews-modal-forms-form'>
            {/*Имага временно по дефолту*/}
            {/*<input value={userImage} type="file" accept='image/jpeg,image/png' onChange={event => SetUserImage(event.target.value)} />*/}
            <div className='reviews-modal-forms-form-avatar'><img src={UserAvatar}/></div>

            {(testUserName && errorUserName) && <div style={{color: 'red'}}>{errorUserName}</div>}
            <input name='username' className='reviews-modal-forms-form-username' value={userName} type='text'
                   placeholder='Введите имя' onChange={event => userNameHandler(event)}
                   onBlur={event => blurHandler(event)}/>

            {(testEmail && errorEmail) && <div style={{color: 'red'}}>{errorEmail}</div>}
            <input name='email' className='reviews-modal-forms-form-email' type='text' value={email}
                   placeholder='Введите email...'
                   onBlur={event => blurHandler(event)} onChange={event => emailHandler(event)}/>


            {(testText && errorText) && <div style={{color: 'red'}}>{errorText}</div>}
            <textarea name='textarea' className='reviews-modal-forms-form-textarea' value={text} rows={5}
                      placeholder='Текст отзыва...'
                      onChange={event => textHandler(event)} onBlur={event => blurHandler(event)}></textarea>
            <div className='reviews-modal-forms-form-question'>Как вы оцениваете нашу работу?</div>
            {(testRate && errorRate) && <div style={{color: 'red'}}>{errorRate}</div>}
            <StarRate setTestRate={setTestRate} setRate={setRate}/>
            <div className='reviews-modal-forms-form-button'>
                <button type='submit' className={text.length <= 4 || userName.length === 0 || rate.length === 0 ?
                    'reviews-modal-forms-form-button-submit' : 'reviews-modal-forms-form-button-submit disabled'}
                        onClick={addNewReviews}>Отправить
                </button>
            </div>
        </form>
    );
};