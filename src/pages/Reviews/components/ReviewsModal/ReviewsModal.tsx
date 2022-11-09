import React, {FC, useState} from 'react';
import {IRewiews, TypeSetState} from "../../../../types";
import './ReviewsModal.scss'
import RemoveIco from "../../../../assets/icons/remove-add.svg";
import {ReviewsForm} from "../ReviewsForm/ReviewsForm";
import {ReviewsSubmit} from "../ReviewsSubmit/ReviewsSubmit";

interface ReviewsModal {
    visible: boolean,
    setVisible: TypeSetState<boolean>,
    review: IRewiews[],
    setReviews: TypeSetState<IRewiews[]>
}

export const ReviewsModal: FC<ReviewsModal> = ({visible, setVisible, setReviews, review}) => {

    const emailtest = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const [email, setEmail] = useState('')
    const [submitForm, setSubmitForm] = useState(false)
    const [testUserName, setTestUserName] = useState(false)
    const [testEmail, setTestEmail] = useState(false)
    const [testText, setTestText] = useState(false)
    const [errorEmail, setErrorEmail] = useState('Введите email')


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

    return (
        <div className={visible ? 'reviews-modal active' : 'reviews-modal'} onClick={() => setVisible(false)}>
            <div className={visible ? 'reviews-modal-item active' : 'reviews-modal-item'}
                 onClick={(e) => e.stopPropagation()}>
                <div className='reviews-modal-forms'>
                    <div className='reviews-modal-forms-button-remove'><img src={RemoveIco}
                                                                            onClick={() => setVisible(false)}/></div>
                    {!submitForm &&
                        <ReviewsForm emailtest={emailtest} setReviews={setReviews} review={review}
                                     setSubmitForm={setSubmitForm} setErrorEmail={setErrorEmail}
                                     setEmail={setEmail} setTestEmail={setTestEmail}
                                     email={email} setTestUserName={setTestUserName} errorEmail={errorEmail}
                                     blurHandler={blurHandler} emailHandler={emailHandler} testUserName={testUserName}
                                     testEmail={testEmail} testText={testText} setTestText={setTestText}/>}
                    {submitForm && <ReviewsSubmit emailtest={emailtest} emailHandler={emailHandler} blurHandler={blurHandler} email={email}
                                                  errorEmail={errorEmail} testEmail={testEmail}
                                                  setSubmitForm={setSubmitForm}/>}
                </div>
            </div>
        </div>
    );
};
