import {FC} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import SunIcoWhiteTheme from '../../../assets/icons/Header/SunThemeIco.svg'
import MobileLogoWhiteTheme from '../../../assets/icons/Header/LogoIco.svg'
import './HeaderTop.scss'
import {BasketIcoAndCount} from "../../UI/Basket/BasketIcoAndCount/BasketIcoAndCount";
import {TypeSetState} from "../../../types";

interface HeaderTop {
    setCurrentPage: TypeSetState<string>
}

export const HeaderTop: FC<HeaderTop> = ({setCurrentPage}) => {


    return (
        <>
            <header className='header-top' id='header-top'>

                <div className='header-top-elements'>

                    <div className='header-top-elements__change-theme'>
                        <LazyLoadImage src={SunIcoWhiteTheme} alt='SunIcoWhiteTheme'/>
                    </div>

                    <Link to='/' onClick={() => setCurrentPage('/')}>
                        <LazyLoadImage src={MobileLogoWhiteTheme} alt='MobileLogoWhiteTheme'/>
                    </Link>

                    <BasketIcoAndCount/>
                </div>
            </header>
        </>
    );
};
