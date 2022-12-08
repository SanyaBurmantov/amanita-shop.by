import {
    BLOG_ROUTE,
    FAQ_ROUTE,
    HOME_ROUTE,
    PAYMENT_ROUTE,
    PRODUCTS_ROUTE,
    REVIEWS_ROUTE,
    TELEGRAM_ROUTE
} from "./utils/consts";
import {Home} from "./pages/Home/Home";
import {Blog} from "./pages/Blog/Blog";
import {Reviews} from "./pages/Reviews/Reviews";
import {PaymentAndDelivery} from "./pages/Payment-and-delivery/Payment-and-delivery";
import Products from "./pages/Products/components/Products";
import {Telegram} from "./pages/Telegram/Telegram";
import Faq from './pages/Faq/Faq'
export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    }, {
        path: PRODUCTS_ROUTE,
        Component: Products
    },{
        path: BLOG_ROUTE,
        Component: Blog
    },{
        path: REVIEWS_ROUTE,
        Component: Reviews
    },{
        path: PAYMENT_ROUTE,
        Component: PaymentAndDelivery
    },{
        path: TELEGRAM_ROUTE,
        Component: Telegram,
    },{
        path: FAQ_ROUTE,
        Component: Faq,
    }

]


