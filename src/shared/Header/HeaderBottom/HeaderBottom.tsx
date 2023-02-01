import {FC} from 'react';
import {Link} from "react-router-dom";
import {Pages} from "../../../data/Pages";
import './HeaderBottom.scss'
import {TypeSetState} from "../../../types";

interface HeaderBottom {
    currentPage: string,
    setCurrentPage: TypeSetState<string>
}


export const HeaderBottom: FC<HeaderBottom> = ({currentPage, setCurrentPage}) => {


    return (
        <header className='header-bottom' id='header-bottom'>
            <ul className='header-bottom__menu'>
                {Pages.map((item) =>
                    (item.name === 'Магазин') ?
                        <li className='header-bottom__item' key={item.id}>
                            <Link to={item.href} className='header-bottom__link' key={item.id}
                                  onClick={() => setCurrentPage(item.href)}>
                                <div className='header-bottom__item-wrapper'>
                                    <div
                                        className='header-bottom__circle-one'>
                                        <div className='header-bottom__circle-two'>
                                            <div className='header-bottom__circle-three'>
                                                <div className='header-bottom__icon'>
                                                    {item.ico}
                                                </div>
                                                <p className='header-bottom__title' key={item.id}>{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        :
                        <li className={currentPage === item.href ? 'header-bottom__item active' : 'header-bottom__item'} key={item.id}>
                            <Link to={item.href} className='header-bottom__link' key={item.id}
                                  onClick={() => setCurrentPage(item.href)}>
                                <div className='header-bottom__icon'>
                                    {item.ico}
                                </div>
                                <p className='header-bottom__title' key={item.id}>{item.name}</p>
                            </Link>
                        </li>
                )}
            </ul>
        </header>
    );
};
