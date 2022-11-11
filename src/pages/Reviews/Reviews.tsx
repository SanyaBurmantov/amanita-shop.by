import React, {FC, useState} from "react";
import {reviews} from "../../data/Reviews";
import {IRewiews} from "../../types";
import {ReviewsItem} from "./components/ReviewsItem/ReviewsItem";
import './Reviews.scss'
import {ReviewsModal} from "./components/ReviewsModal/ReviewsModal";

interface ReviewsProps {
}

export const Reviews: FC<ReviewsProps> = () => {

    const [visible, setVisible] = useState(false)

    const [review, setReviews] = useState(reviews)

    return (
        <div className="container">
            <div className='reviews'>
                <div className='reviews-title'>Отзывы</div>
                <div className='reviews-desc'>
                    <div className='reviews-desc-subtitle'>Какой-нибудь текст типо “Каждый ваш обосцанный отзыв важен
                        для нас (на самом деле нам похуй) бля бля мы мониторим отзывы и стараемся сделать магаз пиизже”
                    </div>
                    <button className='reviews-desc-button' onClick={() => setVisible(true)}>Оставить отзыв</button>
                </div>
                <div className="reviews-items">
                    {review.map((rew: IRewiews, index) => <ReviewsItem
                        rew={rew}
                        key={rew.id}
                    />)}
                </div>
                <ReviewsModal visible={visible} setVisible={setVisible} review={review} setReviews={setReviews}/>
            </div>
        </div>
    )
}


