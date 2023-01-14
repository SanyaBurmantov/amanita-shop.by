import {FC, useState} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import AmanitaLogo from '../../../assets/icons/headerIco/logo-amanita.svg'
import {Link} from "react-router-dom";
import {Pages} from "../../../data/Pages";
import {Modal} from "../../UI/Modal/Modal";
import {Cart} from "../../UI/Cart/Cart";
import {BasketIcoAndCount} from "../../UI/Basket/BasketIcoAndCount";
import './HeaderDesktop.scss'


interface HeaderDesktop {

}

export const HeaderDesktop: FC<HeaderDesktop> = () => {

    const [showBasket, setShowBasket] = useState(false)

    return (

        <header className='header-desktop'>
            <div className="container">
                <div className='header-wrapper'>

                    <div className='header-desktop-logo'>
                        <Link to='/'>
                            <LazyLoadImage className='header-desktop-logo__img' src={AmanitaLogo} alt='Amanita logo'/>
                        </Link>
                    </div>

                    <nav className='header-desktop-menu'>

                        <ul>
                            {Pages.map(item =>
                                <li>
                                    <Link to={item.href}>{item.name}</Link>
                                </li>
                            )}
                        </ul>
                    </nav>

                    {(window.innerWidth > 992) && <>
                        <div className='header-desktop-button' onClick={() => setShowBasket(true)}>
                            <button className='header-desktop-button__btn'>Оформить заказ</button>
                        </div>
                        <Modal visible={showBasket} setVisible={setShowBasket}>
                            <Cart/>
                        </Modal>
                    </>}

                    {(window.innerWidth <= 992) && <BasketIcoAndCount/>}

                </div>
                <hr/>
            </div>

        </header>
    );
};





//
//
// let [activeState, setActiveState] = useState(false);
//
// const { scrollY } = useScroll();
//
// useEffect(() => {
//     return scrollY.onChange((latest) => {
//         const header = document.getElementById('header');
//         if(latest>=500){
//             header!.classList.add('sticky');
//         }
//         if(latest<=500 && header!.classList.contains('sticky')){
//             header!.classList.remove('sticky')
//         }
//         if(latest>=625){
//             header!.classList.add('sticked');
//         }
//         if(latest<=625 && header!.classList.contains('sticky')){
//             header!.classList.remove('sticked')
//         }
//     })
// }, [])






// <header id='header' className=''>
//
//     <div className="header">
//         <div className="header-menu-logo">
//             <Link to="/">
//                 <LazyLoadImage className='header-menu-logo-img' src={logo} alt='logo-amanita'/>
//                 <LazyLoadImage className='header-menu-logo-img sticky' src={logostick} alt='logo-amanita'/>
//             </Link>
//         </div>
//         <div className='header-menu'>
//             <div className="header-menu-menu">
//                 <div onClick={() => setActiveState(prev => !prev)}>
//                     <div className={`header-menu-menu-burger ${activeState ? 'active' : ''}`}>
//                         <span></span>
//                     </div>
//                 </div>
//                 <ul className={`${activeState ? 'active' : ''}`}>
//                     <div className='header-menu-title'>Меню</div>
//
//                     {Pages.map(item =>
//                         <Link to={item.href} key={item.name}
//                               onClick={() => setActiveState(prev => !prev)}
//                               className="header-menu-menu-element">
//                             <div className='header-menu-menu-element-title'>
//                                 <div className='header-menu-menu-element-title-marker'></div>
//                                 <div className='header-menu-menu-element-title-name'>{item.name}</div>
//                             </div>
//                             <div className='header-menu-menu-element-arrow'></div>
//                         </Link>
//                     )}
//                 </ul>
//                 <div className={`header-blur ${activeState ? 'active' : ''}`}
//                      onClick={() => setActiveState(prev => !prev)}></div>
//
//             </div>
//         </div>
//         <div className="header-button"> <div className="header_cart"><Cart /></div>
//             <button className="header-button-btn">Оформить заказ</button>
//         </div>
//     </div>
//     <hr />
// </header>