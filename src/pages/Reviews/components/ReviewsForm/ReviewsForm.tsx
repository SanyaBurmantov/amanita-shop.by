import React, {FC, useEffect, useState} from 'react';
import UserAvatar from "../../../../assets/icons/UserAvatar.svg";
import {StarRate} from "../StarRate/StarRate";
import {IRewiews, TypeSetState} from "../../../../types";
import './ReviewsForm.scss'


interface ReviewsForm{
    setReviews: TypeSetState<IRewiews[]>,
    review: IRewiews[]
}

export const ReviewsForm: FC<ReviewsForm> = ({setReviews, review}) => {

    const [userName, setUserName] = useState('')
    const [text, setText] = useState('')
    const [rate, setRate] = useState('')
    const [testUserName, setTestUserName] = useState(false)
    const [testText, setTestText] = useState(false)
    const [errorUserName, setErrorUserName] = useState('Введите имя')
    const [errorText, setErrorText] = useState('Введите текст отзыва')
    const [formValid, setFormValid] = useState(false)
    // Имага временно по дефолту
    // const [userImage, SetUserImage] = useState('')


    const addNewReviews = (e: any) => {
        e.preventDefault()
            const newReviews = {
                id: Date.now(),
                userName,
                rate,
                userImage: 'https://sun9-87.userapi.com/impg/z3c-4hgHqhsMh-5UQOrKa873TS9fAoKgnSzDnw/kn14aZIkPzs.jpg?size=539x666&quality=96&sign=4935b0f99a85f97997942247a778c82f&type=album',
                text,
                Data: new Date().toLocaleDateString(),
            }
            setReviews([newReviews, ...review])
            setUserName('')
            setText('')
            setRate('')

            // Имага временно по дефолту
            // SetUserImage('')
    }

    const blurHandler = (e:any) => {
        switch (e.target.name) {
            case 'username':
                setTestUserName(true)
                break
            case 'textarea' :
                setTestText(true)
                break
        }
    }

    const userNameHandler = (e:any) => {
        setUserName(e.target.value)
        if(!e.target.value) {
            setErrorUserName('Поле не должно быть пустым')
        } else {
            setErrorUserName('')
        }
    }

    const textHandler = (e:any) => {
        setText(e.target.value)
        if(!e.target.value) {
            setErrorText('Поле не должно быть пустым')
        }
            if(e.target.value.length<5) {
                setErrorText('Поле должно содержать 5 или более символов')

        } else {
            setErrorText('')
        }
    }

    useEffect(()=> {
        if(errorUserName || errorText) {
            setFormValid(false)
        }else {
            setFormValid(true)
        }

    },[errorText, errorUserName])

    return (
        <form className='reviews-modal-forms-form'>
            {/*Имага временно по дефолту*/}
            {/*<input value={userImage} type="file" accept='image/jpeg,image/png' onChange={event => SetUserImage(event.target.value)} />*/}
            <div className='reviews-modal-forms-form-avatar'><img src={UserAvatar}/></div>
            {(testUserName && errorUserName) && <div style={{color: 'red'}}>{errorUserName}</div>}
            <input name='username' className='reviews-modal-forms-form-username' value={userName} type='text'
                   placeholder='Введите имя' onChange={event => userNameHandler(event)}
                   onBlur={event => blurHandler(event)}/>
            {(testText && errorText) && <div style={{color: 'red'}}>{errorText}</div>}
            <textarea name='textarea' className='reviews-modal-forms-form-textarea' value={text} rows={5}
                      placeholder='Текст отзыва...'
                      onChange={event => textHandler(event)} onBlur={event => blurHandler(event)}></textarea>
            <div className='reviews-modal-forms-form-question'>Как вы оцениваете нашу работу?</div>
            <StarRate setRate={setRate}/>
            <div className='reviews-modal-forms-form-button'>
                <button type='submit' className={text.length <= 4 || userName.length === 0 || rate.length === 0 ?
                    'reviews-modal-forms-form-button-submit':'reviews-modal-forms-form-button-submit disabled'}
                        onClick={addNewReviews} disabled={!formValid}>Отправить
                </button>
            </div>
        </form>
    );
};