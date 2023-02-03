import React from 'react';
import './Background.scss'
import BackgroundProducts from '../../assets/Background/bg_products.jpg'

export const Background = () => {
    return (
        <img className='bg-background' src={BackgroundProducts} alt='background products'/>
    );
};
