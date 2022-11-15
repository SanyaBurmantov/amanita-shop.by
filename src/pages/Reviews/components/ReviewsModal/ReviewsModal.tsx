import React, {FC, useEffect, useState} from 'react';
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

    const [submitForm, setSubmitForm] = useState(false)


    return (
        <div className={visible ? 'reviews-modal active' : 'reviews-modal'} onClick={() => setVisible(false)}>
            <div className={visible ? 'reviews-modal-item active' : 'reviews-modal-item'}
                 onClick={(e) => e.stopPropagation()}>
                <div className='reviews-modal-forms'>
                    <div className='reviews-modal-forms-button-remove'><img src={RemoveIco}
                                                                            onClick={() => setVisible(false)}/></div>
                    {!submitForm &&
                        <ReviewsForm review={review} setReviews={setReviews} setSubmitForm={setSubmitForm}/>}
                    {submitForm &&
                        <ReviewsSubmit/>}
                </div>
            </div>
        </div>
    );
};
