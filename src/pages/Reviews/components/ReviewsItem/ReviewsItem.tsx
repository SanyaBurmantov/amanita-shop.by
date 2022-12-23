import React, {FC} from 'react';
import {IRewiews} from "../../../../types";
import './ReviewsItem.scss'
import GoldStar from '../../../../assets/icons/Other/Star-gold.svg'
import GrayStar from '../../../../assets/icons/Other/Star-gray.svg'

interface ReviewsItem {
    rew: IRewiews
}

export const ReviewsItem: FC<ReviewsItem> = ({rew}) => {

    const createdAt = new Date(rew.Data).toLocaleDateString();

    return (
        <div className='reviews-item'>
            <div className='reviews-item-avatar'><img src={rew.userImage}/></div>
            <div className='reviews-item-info'>
                <div className='reviews-item-info-desc'>
                    <div className='reviews-item-info-desc-username'>{rew.userName}</div>
                    <div className='reviews-item-info-desc-rate'>
                        {rew.rate === "5" && (<div><img src={GoldStar}/><img src={GoldStar}/><img src={GoldStar}/><img
                            src={GoldStar}/><img src={GoldStar}/></div>)}
                        {rew.rate === "4" && (<div><img src={GoldStar}/><img src={GoldStar}/><img src={GoldStar}/><img
                            src={GoldStar}/><img src={GrayStar}/></div>)}
                        {rew.rate === "3" && (<div><img src={GoldStar}/><img src={GoldStar}/><img src={GoldStar}/><img
                            src={GrayStar}/><img src={GrayStar}/></div>)}
                        {rew.rate === "2" && (<div><img src={GoldStar}/><img src={GoldStar}/><img src={GrayStar}/><img
                            src={GrayStar}/><img src={GrayStar}/></div>)}
                        {rew.rate === "1" && (<div><img src={GoldStar}/><img src={GrayStar}/><img src={GrayStar}/><img
                            src={GrayStar}/><img src={GrayStar}/></div>)}
                    </div>
                </div>
                <div className='reviews-item-info-data'>{createdAt}</div>
                <div className='reviews-item-info-text'>{rew.text}</div>
                <div className='reviews-item-info-button'>Читать далее</div>
            </div>
        </div>
    );
};
