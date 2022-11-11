import React, {FC, useEffect, useState} from 'react';
import {IRewiews, TypeSetState} from "../../../../types";
import './ReviewsModal.scss'
import RemoveIco from "../../../../assets/icons/remove-add.svg";
import {ReviewsForm} from "../ReviewsForm/ReviewsForm";
import {ReviewsSubmit} from "../ReviewsSubmit/ReviewsSubmit";
import {EditForm} from "../EditForm/EditForm";

interface ReviewsModal {
    visible: boolean,
    setVisible: TypeSetState<boolean>,
    review: IRewiews[],
    setReviews: TypeSetState<IRewiews[]>
}

export const ReviewsModal: FC<ReviewsModal> = ({visible, setVisible, setReviews, review}) => {

    const emailtest = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const [userName, setUserName] = useState('')
    const [text, setText] = useState('')
    const [rate, setRate] = useState('')
    const [email, setEmail] = useState('')
    // Имага временно по дефолту
    // const [userImage, SetUserImage] = useState('')

    const [testUserName, setTestUserName] = useState(false)
    const [testEmail, setTestEmail] = useState(false)
    const [testText, setTestText] = useState(false)
    const [testRate, setTestRate] = useState(false)

    const [errorEmail, setErrorEmail] = useState('Введите email')
    const [errorUserName, setErrorUserName] = useState('Введите имя')
    const [errorText, setErrorText] = useState('Введите текст отзыва')
    const [errorRate, setErrorRate] = useState('Выберите отметку')

    const [submitForm, setSubmitForm] = useState(false)
    const [editForm, setEditForm] = useState(false)
    const [formValid, setFormValid] = useState(false)

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

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'username':
                setTestUserName(true)
                break
            case 'textarea' :
                setTestText(true)
                break
            case 'email':
                setTestEmail(true)
                break
        }
    }

    const emailHandler = (e: any) => {
        setEmail(e.target.value)
        if (!emailtest.test(String(e.target.value).toLowerCase())) {
            setErrorEmail('Некорректный email')
        } else {
            setErrorEmail('')
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
        <div className={visible ? 'reviews-modal active' : 'reviews-modal'} onClick={() => setVisible(false)}>
            <div className={visible ? 'reviews-modal-item active' : 'reviews-modal-item'}
                 onClick={(e) => e.stopPropagation()}>
                <div className='reviews-modal-forms'>
                    <div className='reviews-modal-forms-button-remove'><img src={RemoveIco}
                                                                            onClick={() => setVisible(false)}/></div>
                    {!submitForm &&
                        <ReviewsForm emailtest={emailtest} setReviews={setReviews} review={review}
                                     setSubmitForm={setSubmitForm} setErrorEmail={setErrorEmail} setEmail={setEmail}
                                     setTestEmail={setTestEmail} email={email} errorEmail={errorEmail}
                                     testEmail={testEmail} testText={testText} setTestText={setTestText}
                                     setRate={setRate} setTestRate={setTestRate} userName={userName} rate={rate}
                                     testUserName={testUserName} errorUserName={errorUserName} errorRate={errorRate}
                                     emailHandler={emailHandler} blurHandler={blurHandler} text={text}
                                     textHandler={textHandler} testRate={testRate} errorText={errorText}
                                     setErrorText={setErrorText}
                                     setTestUserName={setTestUserName} setErrorUserName={setErrorUserName}
                                     setErrorRate={setErrorRate} userNameHandler={userNameHandler} setText={setText}
                                     setUserName={setUserName}/>}


                    {submitForm && !editForm &&
                        <ReviewsSubmit emailtest={emailtest} emailHandler={emailHandler} blurHandler={blurHandler}
                                       email={email}
                                       errorEmail={errorEmail} testEmail={testEmail}
                                       setEditForm={setEditForm}/>}

                    {editForm && <EditForm emailtest={emailtest} setReviews={setReviews} review={review}
                                           setSubmitForm={setSubmitForm} setErrorEmail={setErrorEmail}
                                           setEmail={setEmail}
                                           setTestEmail={setTestEmail} email={email} errorEmail={errorEmail}
                                           testEmail={testEmail} testText={testText} setTestText={setTestText}
                                           setRate={setRate} setTestRate={setTestRate} userName={userName} rate={rate}
                                           testUserName={testUserName} errorUserName={errorUserName}
                                           errorRate={errorRate}
                                           emailHandler={emailHandler} blurHandler={blurHandler} text={text}
                                           textHandler={textHandler} testRate={testRate} errorText={errorText}
                                           setErrorText={setErrorText}
                                           setTestUserName={setTestUserName} setErrorUserName={setErrorUserName}
                                           setErrorRate={setErrorRate} userNameHandler={userNameHandler}
                                           setText={setText}
                                           setUserName={setUserName}/>

                    }
                </div>
            </div>
        </div>
    );
};
