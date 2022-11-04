import React, {FC, useState} from 'react';
import UserAvatar from "../../../../assets/icons/UserAvatar.svg";
import {StarRate} from "../StarRate/StarRate";
import {IRewiews, TypeSetState} from "../../../../types";


interface ReviewsForm{
    setReviews: TypeSetState<IRewiews[]>,
    review: IRewiews[]
}

export const ReviewsForm: FC<ReviewsForm> = ({setReviews, review}) => {

    const [userName, setUserName] = useState('')
    const [text, setText] = useState('')
    const [rate, setRate] = useState('')
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
        setReviews([...review, newReviews])
        setUserName('')
        setText('')
        setRate('')
        // Имага временно по дефолту
        // SetUserImage('')
    }

    const isFormDisabled = text.length === 0 || userName.length === 0 || rate.length === 0;

    return (
        <form className='reviews-modal-forms-form'>
            {/*Имага временно по дефолту*/}
            {/*<input value={userImage} type="file" accept='image/jpeg,image/png' onChange={event => SetUserImage(event.target.value)} />*/}
            <div className='reviews-modal-forms-form-avatar'><img src={UserAvatar}/></div>
            <input className='reviews-modal-forms-form-username' value={userName} type='text'
                   placeholder='Введите имя' onChange={event => setUserName(event.target.value)}
                   required/>
            <textarea className='reviews-modal-forms-form-textarea' value={text} rows={5}
                      placeholder='Текст отзыва...'
                      onChange={event => setText(event.target.value)}></textarea>
            <div className='reviews-modal-forms-form-question'>Как вы оцениваете нашу работу?</div>
            <StarRate setRate={setRate}/>
            <div className='reviews-modal-forms-form-button'>
                <button type='submit' className='reviews-modal-forms-form-button-submit'
                        onClick={addNewReviews}
                        disabled={isFormDisabled}>Отправить
                </button>
            </div>
        </form>
    );
};
