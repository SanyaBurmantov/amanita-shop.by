import React from 'react';
import './Background.scss'
import BackgroundProducts from '../../assets/Background/bg_products.jpg'

export const Background = () => {
    return (
        <div className='bg-background'>
            <img src={BackgroundProducts} alt='background products'/>
        </div>
    );
};
