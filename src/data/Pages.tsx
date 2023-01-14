import {BLOG_ROUTE, HOME_ROUTE, PAYMENT_ROUTE, PRODUCTS_ROUTE, REVIEWS_ROUTE} from "../utils/consts";
import {ReactComponent as Home} from '../assets/icons/Header/HomeIco.svg'
import {ReactComponent as Blog} from '../assets/icons/Header/BlogIco.svg'
import {ReactComponent as Delivery} from '../assets/icons/Header/DeliveryIco.svg'
import {ReactComponent as Shop} from '../assets/icons/Header/ShopIco.svg'
import {ReactComponent as Reviews} from '../assets/icons/Header/ReviewsIco.svg'

export const Pages = [
    {
        id: 1,
        name: 'Главная',
        href: HOME_ROUTE,
        ico: <Home/>
    },
    {
        id: 2,
        name: 'Блог',
        href: BLOG_ROUTE,
        ico: <Blog/>
    },
    {
        id: 3,
        name: 'Магазин',
        href: PRODUCTS_ROUTE,
        ico: <Shop/>
    },
    {
        id: 4,
        name: 'Доставка',
        href: PAYMENT_ROUTE,
        ico: <Delivery/>
    },
    {
        id: 5,
        name: 'Отзывы',
        href: REVIEWS_ROUTE,
        ico: <Reviews/>
    }
];
