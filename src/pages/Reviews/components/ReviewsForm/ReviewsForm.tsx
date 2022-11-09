import React, {FC, useEffect, useState} from 'react';
import UserAvatar from "../../../../assets/icons/UserAvatar.svg";
import {StarRate} from "../StarRate/StarRate";
import {FunctionHandler, IRewiews, TypeSetState} from "../../../../types";
import './ReviewsForm.scss'


interface ReviewsForm {
    setReviews: TypeSetState<IRewiews[]>,
    review: IRewiews[],
    setSubmitForm: TypeSetState<boolean>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setTestUserName: React.Dispatch<React.SetStateAction<boolean>>,
    errorEmail: string,
    blurHandler: FunctionHandler,
    emailHandler: FunctionHandler,
    testUserName: boolean,
    testEmail: boolean,
    testText: boolean,
    setTestText: React.Dispatch<React.SetStateAction<boolean>>,
    emailtest: RegExp,
    setTestEmail: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorEmail: React.Dispatch<React.SetStateAction<string>>


}

export const ReviewsForm: FC<ReviewsForm> = ({
                                                 setReviews,
                                                 review,
                                                 setSubmitForm,
                                                 setEmail,
                                                 email,
                                                 setTestUserName,
                                                 errorEmail,
                                                 emailHandler,
                                                 blurHandler,
                                                 testUserName,
                                                 testEmail,
                                                 testText,
                                                 setTestText,
                                                 emailtest,
                                                 setTestEmail,
                                                 setErrorEmail
                                             }) => {

    const [userName, setUserName] = useState('')
    const [text, setText] = useState('')
    const [rate, setRate] = useState('')
    const [testRate, setTestRate] = useState(false)
    const [errorUserName, setErrorUserName] = useState('Введите имя')
    const [errorText, setErrorText] = useState('Введите текст отзыва')
    const [errorRate, setErrorRate] = useState('Выберите отметку')
    const [formValid, setFormValid] = useState(false)
    // Имага временно по дефолту
    // const [userImage, SetUserImage] = useState('')

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

    const userNameHandler = (e: any) => {
        setUserName(e.target.value)
        if (!e.target.value) {
            setErrorUserName('Поле не должно быть пустым')
        } else {
            setErrorUserName('')
        }
    }

    const textHandler = (e: any) => {
        setText(e.target.value)
        if (!e.target.value) {
            setErrorText('Поле не должно быть пустым')
        }
        if (e.target.value.length < 5) {
            setErrorText('Поле должно содержать 5 или более символов')

        } else {
            setErrorText('')
        }
    }

    useEffect(() => {
        if (errorUserName || errorText || errorEmail) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [errorText, errorUserName, errorEmail])

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