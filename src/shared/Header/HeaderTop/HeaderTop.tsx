import {FC} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import SunIcoWhiteTheme from '../../../assets/icons/Header/SunThemeIco.svg'
import MobileLogoWhiteTheme from '../../../assets/icons/Header/LogoIco.svg'
import './HeaderTop.scss'

import {BasketIcoAndCount} from "../../UI/Basket/BasketIcoAndCount";

interface HeaderTop {

}

export const HeaderTop: FC<HeaderTop> = ({}) => {


    return (
        <>
            <header className='header-top'>

                <div className='header-top-elements'>

                    <div className='header-top-elements__change-theme'>
                        <LazyLoadImage src={SunIcoWhiteTheme} alt='SunIcoWhiteTheme'/>
                    </div>

                    <Link to='/'>
                        <LazyLoadImage src={MobileLogoWhiteTheme} alt='MobileLogoWhiteTheme'/>
                    </Link>

                    <BasketIcoAndCount/>
                </div>
            </header>
        </>
    );
};
