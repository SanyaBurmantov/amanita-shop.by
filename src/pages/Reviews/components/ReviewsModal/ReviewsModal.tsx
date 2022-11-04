import React, {FC, useState} from 'react';
import {IRewiews, TypeSetState} from "../../../../types";
import './ReviewsModal.scss'
import RemoveIco from "../../../../assets/icons/remove-add.svg";
import {ReviewsForm} from "../ReviewsForm/ReviewsForm";

interface ReviewsModal {
    visible: boolean,
    setVisible: TypeSetState<boolean>,
    review: IRewiews[],
    setReviews: TypeSetState<IRewiews[]>
}

export const ReviewsModal: FC<ReviewsModal> = ({visible, setVisible, setReviews, review}) => {

    return (

            <div className={visible ? 'reviews-modal active' : 'reviews-modal'} onClick={() => setVisible(false)}>
                <div className={visible ? 'reviews-modal-item active' : 'reviews-modal-item'}
                     onClick={(e) => e.stopPropagation()}>
                    <div className='reviews-modal-forms'>
                        <div className='reviews-modal-forms-button-remove'><img src={RemoveIco} onClick={() => setVisible(false)}/></div>

                        <ReviewsForm setReviews={setReviews} review={review} />

                        {/*{<div className='reviews-modal-forms-sent'>*/}
                        {/*    <div className='reviews-modal-forms-sent-text'>Спасибо за отзыв бро!</div>*/}
                        {/*    <div className='reviews-modal-forms-sent-image'><img src='https://sun9-87.userapi.com/impg/z3c-4hgHqhsMh-5UQOrKa873TS9fAoKgnSzDnw/kn14aZIkPzs.jpg?size=539x666&quality=96&sign=4935b0f99a85f97997942247a778c82f&type=album'/></div>*/}
                        {/*</div>}*/}
                    </div>
                </div>
            </div>
    );
};
