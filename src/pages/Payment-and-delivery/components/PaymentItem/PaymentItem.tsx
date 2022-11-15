import React, {FC} from 'react';
import './PaymentItem.scss'
import {IPayment} from "../../../../types";

interface PaymentItem {
    item: IPayment,
}

export const PaymentItem: FC<PaymentItem> = ({item}) => {
    return (
        <div className="payment-card">
                <div className='payment-card-column'>
                    <div className='payment-card-column-image'><img src={item.image}/></div>
                    <hr/>
                    <div className='payment-card-column-title'>{item.location}</div>
                    <div className='payment-card-column-subtitle'>{item.subtitle}</div>
                    <div className='payment-card-column-description'>
                        <div className='payment-card-column-description-price'>
                            <div className='payment-card-column-description-price-title'>Стоимость</div>
                            <div className='payment-card-column-description-price-number'>{item.delivery}</div>
                        </div>
                        <hr/>
                        <div className='payment-card-column-description-payment'>
                            <div className='payment-card-column-description-payment-title'>Оплата</div>
                            <div className='payment-card-column-description-payment-desc'>{item.payment}</div>
                        </div>
                    </div>
                    <div className='payment-card-column-more'>Подробнее</div>
                </div>
        </div>
    );
};