import {FC, useEffect, useState} from "react";
import logo from '../../assets/icons/headerIco/logo-amanita.svg'
import {useScroll} from "framer-motion"
import {Link} from "react-router-dom";
import {Cart} from "../Cart/Cart";
import logostick from '../../assets/icons/headerIco/logo-amanita-sticky.svg'
import {Pages} from '../../data/Pages'

interface Header {

}

export const Header: FC<Header> = () => {



    let [activeState, setActiveState] = useState(false);


    const { scrollY } = useScroll();




    useEffect(() => {
        return scrollY.onChange((latest) => {
            const header = document.getElementById('header');
            if(latest>=500){
                header!.classList.add('sticky');
            }
            if(latest<=500 && header!.classList.contains('sticky')){
                header!.classList.remove('sticky')
            }
            if(latest>=625){
                header!.classList.add('sticked');
            }
            if(latest<=625 && header!.classList.contains('sticky')){
                header!.classList.remove('sticked')
            }
        })
    }, [])

    return (
        <header id='header' className=''>

            <div className="header">
            <div className="header-menu-logo">
                <Link to="/">
                    <img className='header-menu-logo-img' src={logo} alt='logo-amanita'/>
                    <img className='header-menu-logo-img sticky' src={logostick} alt='logo-amanita'/>
                </Link>
            </div>
            <div className='header-menu'>
                <div className="header-menu-menu">
                    <div onClick={() => setActiveState(prev => !prev)}>
                        <div className={`header-menu-menu-burger ${activeState ? 'active' : ''}`}>
                            <span></span>
                        </div>
                    </div>
                    <ul className={`${activeState ? 'active' : ''}`}>
                        <div className='header-menu-title'>Меню</div>

                        {Pages.map(item =>
                            <Link to={item.href} key={item.name}
                                  onClick={() => setActiveState(prev => !prev)}
                                  className="header-menu-menu-element">
                                <div className='header-menu-menu-element-title'>
                                    <div className='header-menu-menu-element-title-marker'></div>
                                    <div className='header-menu-menu-element-title-name'>{item.name}</div>
                                </div>
                                <div className='header-menu-menu-element-arrow'></div>
                            </Link>
                        )}
                    </ul>
                    <div className={`header-blur ${activeState ? 'active' : ''}`}
                         onClick={() => setActiveState(prev => !prev)}></div>

                </div>
            </div>
            <div className="header-button"> <div className="header_cart"><Cart /></div>
                <button className="header-button-btn">Оформить заказ</button>
            </div>
            </div>
            <hr />
        </header>
    )
}


