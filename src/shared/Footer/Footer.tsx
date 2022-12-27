import {FC} from "react";
import {Pages} from "../../data/Pages";
import {Link} from "react-router-dom";
import './footer.scss'
import icoTG from '../../assets/icons/messagers/tg.svg'
import icoInstagram from '../../assets/icons/messagers/insta.svg'
import icoWhatsapp from '../../assets/icons/messagers/whatsapp.svg'
import icoViber from '../../assets/icons/messagers/viber.svg'
import {LazyLoadImage} from "react-lazy-load-image-component";

interface Footer {
}

export const Footer: FC<Footer> = () => {

    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className='footer-left'>
                        <div className='footer-left__top'>{Pages.map((item, index) =>
                            <Link to={item.href}>{item.name}</Link>
                        )}</div>
                        <div className='footer-left__center'>
                            <a href="tel:+375293487676">375 29 348 76 76</ a>
                            <p>Для звонков по Беларуси</p>
                        </div>
                        <div className='footer-left__bottom'>
                            <p>Республика Беларусь, Минск</p>
                            <p>© 2022 Amanita Shop | Микродозинг | Беларусь </p>
                        </div>
                    </div>
                    <div className='footer-right'>
                        <p>Для связи в мессенджерах:</p>
                        <div className='footer-right__messages'>
                            <a target="_blank" href='https://t.me/Muhomormnsk'><LazyLoadImage src={icoTG}/></a>
                            <a target="_blank" href='https://www.instagram.com/amanita_shops/?igshid=YmMyMTA2M2Y%3D'><LazyLoadImage
                                src={icoInstagram}/></a>
                            <a target="_blank"
                               href='https://api.whatsapp.com/send/?phone=%2B375293487675&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5+%D0%BC%D0%BD%D0%B5+%D0%BD%D1%83%D0%B6%D0%BD%D0%BE+%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F+%D0%BF%D0%BE+%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D0%B4%D0%BE%D0%B7%D0%B8%D0%BD%D0%B3%D1%83&type=phone_number&app_absent=0'><LazyLoadImage
                                src={icoWhatsapp}/></a>
                            <a target="_blank" href='https://viber//chat?number=%2B375293487675'><LazyLoadImage src={icoViber}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
